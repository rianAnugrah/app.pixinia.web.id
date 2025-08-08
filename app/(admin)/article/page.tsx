"use client";

import React, { useEffect, useState } from "react";
import PocketBase, { RecordModel } from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

interface Article {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  status: string;
  featured: boolean;
  allow_comments: boolean;
  views: number;
  reading_time: number;
  published_at: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
}

interface UserOption {
  id: string;
  name?: string;
  email?: string;
}

interface CategoryOption {
  id: string;
  name: string;
  slug?: string;
  description?: string;
  color?: string;
  active?: boolean;
  sort_order?: number;
}

interface TagOption {
  id: string;
  name: string;
  slug?: string;
  color?: string;
}

const initialForm: Article = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  author: "",
  category: "",
  tags: [],
  status: "draft",
  featured: false,
  allow_comments: true,
  views: 0,
  reading_time: 0,
  published_at: "",
  meta_title: "",
  meta_description: "",
  meta_keywords: ""
};

export default function ArticleAdminPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<Article>(initialForm);
  const [editId, setEditId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [users, setUsers] = useState<UserOption[]>([]);
  const [categories, setCategories] = useState<CategoryOption[]>([]);
  const [tags, setTags] = useState<TagOption[]>([]);

  // Fetch articles
  const fetchArticles = async () => {
    setLoading(true);
    try {
      const res = await pb.collection("news_articles").getFullList<Article>({
        sort: "-created"
      });
      setArticles(res);
    } catch (e) {
      setError("Failed to fetch articles");
    }
    setLoading(false);
  };

  // Fetch users for author dropdown
  const fetchUsers = async () => {
    try {
      const res = await pb.collection("users").getFullList<UserOption>({
        sort: "name,email"
      });
      setUsers(res);
    } catch (e) {
      // Optionally handle error
    }
  };

  // Fetch categories for category dropdown
  const fetchCategories = async () => {
    try {
      const res = await pb.collection("news_categories").getFullList<CategoryOption>({
        sort: "sort_order,name"
      });
      setCategories(res);
    } catch (e) {
      // Optionally handle error
    }
  };

  // Fetch tags for tags dropdown
  const fetchTags = async () => {
    try {
      const res = await pb.collection("news_tags").getFullList<TagOption>({
        sort: "name"
      });
      setTags(res);
    } catch (e) {
      // Optionally handle error
    }
  };

  useEffect(() => {
    fetchArticles();
    fetchUsers();
    fetchCategories();
    fetchTags();
  }, []);

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((f) => ({ ...f, [name]: (e.target as HTMLInputElement).checked }));
    } else if (name === "tags") {
      setForm((f) => ({ ...f, tags: value.split(",").map((t: string) => t.trim()).filter(Boolean) }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  // Open modal for create
  const openCreate = () => {
    setForm(initialForm);
    setEditId(null);
    setModalOpen(true);
    setError("");
  };

  // Open modal for edit
  const openEdit = (article: Article) => {
    setForm({ ...article, tags: Array.isArray(article.tags) ? article.tags : [] });
    setEditId(article.id || null);
    setModalOpen(true);
    setError("");
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setEditId(null);
    setForm(initialForm);
    setError("");
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const data = {
        ...form,
        views: Number(form.views),
        reading_time: Number(form.reading_time),
        featured: Boolean(form.featured),
        allow_comments: Boolean(form.allow_comments),
        tags: Array.isArray(form.tags) ? form.tags : [],
      };
      if (editId) {
        await pb.collection("news_articles").update(editId, data);
      } else {
        await pb.collection("news_articles").create(data);
      }
      await fetchArticles();
      closeModal();
    } catch (e: any) {
      setError(e?.message || "Failed to save article");
    }
    setSubmitting(false);
  };

  // Handle delete
  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this article?")) return;
    try {
      await pb.collection("news_articles").delete(id);
      setArticles((arts) => arts.filter((a) => a.id !== id));
    } catch (e) {
      alert("Failed to delete article");
    }
  };

  // Helper functions to get display names
  const getAuthorName = (id: string) => {
    const user = users.find((u) => u.id === id);
    return user ? user.name || user.email || user.id : id;
  };
  const getCategoryName = (id: string) => {
    const cat = categories.find((c) => c.id === id);
    return cat ? cat.name : id;
  };
  const getTagNames = (ids: string[]) => {
    return ids
      .map((id) => {
        const tag = tags.find((t) => t.id === id);
        return tag ? tag.name : id;
      })
      .join(", ");
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Articles Admin</h1>
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          onClick={openCreate}
        >
          + New Article
        </button>
      </div>
      {loading ? (
        <div className="text-center py-12 text-gray-600">Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded shadow">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-2 border-b border-gray-300 font-semibold">Title</th>
                <th className="p-2 border-b border-gray-300 font-semibold">Slug</th>
                <th className="p-2 border-b border-gray-300 font-semibold">Status</th>
                <th className="p-2 border-b border-gray-300 font-semibold">Author</th>
                <th className="p-2 border-b border-gray-300 font-semibold">Category</th>
                <th className="p-2 border-b border-gray-300 font-semibold">Tags</th>
                <th className="p-2 border-b border-gray-300 font-semibold">Views</th>
                <th className="p-2 border-b border-gray-300 font-semibold">Published</th>
                <th className="p-2 border-b border-gray-300 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((a) => (
                <tr key={a.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="p-2 text-gray-900">{a.title}</td>
                  <td className="p-2 text-gray-900">{a.slug}</td>
                  <td className="p-2 text-gray-900">{a.status}</td>
                  <td className="p-2 text-gray-900">{getAuthorName(a.author)}</td>
                  <td className="p-2 text-gray-900">{getCategoryName(a.category)}</td>
                  <td className="p-2 text-gray-900">{Array.isArray(a.tags) ? getTagNames(a.tags) : ""}</td>
                  <td className="p-2 text-gray-900">{a.views}</td>
                  <td className="p-2 text-gray-900">{a.published_at ? new Date(a.published_at).toLocaleDateString() : ""}</td>
                  <td className="p-2 space-x-2">
                    <button
                      className="text-blue-800 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
                      onClick={() => openEdit(a)}
                    >Edit</button>
                    <button
                      className="text-red-700 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-red-400"
                      onClick={() => handleDelete(a.id!)}
                    >Delete</button>
                  </td>
                </tr>
              ))}
              {articles.length === 0 && (
                <tr>
                  <td colSpan={9} className="text-center text-gray-500 py-8">No articles found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal for create/edit */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white rounded shadow-lg w-full max-w-2xl p-8 relative border-2 border-gray-800">
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-black text-2xl font-bold focus:outline-none"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4 text-gray-900">{editId ? "Edit Article" : "New Article"}</h2>
            {error && <div className="mb-4 text-red-700 font-semibold">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900">Title</label>
                  <input name="title" value={form.title} onChange={handleChange} required className="w-full border border-gray-400 rounded px-2 py-1 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Slug</label>
                  <input name="slug" value={form.slug} onChange={handleChange} required className="w-full border border-gray-400 rounded px-2 py-1 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Excerpt</label>
                  <input name="excerpt" value={form.excerpt} onChange={handleChange} className="w-full border border-gray-400 rounded px-2 py-1 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Content</label>
                  <textarea name="content" value={form.content} onChange={handleChange} className="w-full border border-gray-400 rounded px-2 py-1 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400" rows={3} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Author</label>
                  <select
                    name="author"
                    value={form.author}
                    onChange={handleChange}
                    className="w-full border border-gray-400 rounded px-2 py-1 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  >
                    <option value="">Select author...</option>
                    {users.map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.name || u.email || u.id}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Category</label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full border border-gray-400 rounded px-2 py-1 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  >
                    <option value="">Select category...</option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Tags</label>
                  <select
                    name="tags"
                    value={form.tags}
                    onChange={e => {
                      const selected = Array.from(e.target.selectedOptions).map(opt => opt.value);
                      setForm(f => ({ ...f, tags: selected }));
                    }}
                    className="w-full border border-gray-400 rounded px-2 py-1 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    multiple
                  >
                    {tags.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name}
                      </option>
                    ))}
                  </select>
                  <div className="text-xs text-gray-500 mt-1">Hold Ctrl (Windows) or Cmd (Mac) to select multiple tags.</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Status</label>
                  <select name="status" value={form.status} onChange={handleChange} className="w-full border border-gray-400 rounded px-2 py-1 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
                <div className="flex items-center mt-2">
                  <input type="checkbox" name="featured" id="featured" checked={form.featured} onChange={handleChange} className="mr-2" />
                  <label htmlFor="featured" className="text-sm font-medium text-gray-900">Featured</label>
                </div>
                <div className="flex items-center mt-2">
                  <input type="checkbox" name="allow_comments" id="allow_comments" checked={form.allow_comments} onChange={handleChange} className="mr-2" />
                  <label htmlFor="allow_comments" className="text-sm font-medium text-gray-900">Allow Comments</label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Views</label>
                  <input name="views" type="number" value={form.views} onChange={handleChange} className="w-full border border-gray-400 rounded px-2 py-1 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Reading Time (min)</label>
                  <input name="reading_time" type="number" value={form.reading_time} onChange={handleChange} className="w-full border border-gray-400 rounded px-2 py-1 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Published At</label>
                  <input name="published_at" type="datetime-local" value={form.published_at ? form.published_at.slice(0, 16) : ""} onChange={handleChange} className="w-full border border-gray-400 rounded px-2 py-1 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Meta Title</label>
                  <input name="meta_title" value={form.meta_title} onChange={handleChange} className="w-full border border-gray-400 rounded px-2 py-1 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Meta Description</label>
                  <input name="meta_description" value={form.meta_description} onChange={handleChange} className="w-full border border-gray-400 rounded px-2 py-1 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Meta Keywords</label>
                  <input name="meta_keywords" value={form.meta_keywords} onChange={handleChange} className="w-full border border-gray-400 rounded px-2 py-1 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  className="mr-4 px-4 py-2 rounded border border-gray-400 bg-gray-200 text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  onClick={closeModal}
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded bg-blue-800 text-white hover:bg-blue-900 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  disabled={submitting}
                >
                  {submitting ? "Saving..." : editId ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
