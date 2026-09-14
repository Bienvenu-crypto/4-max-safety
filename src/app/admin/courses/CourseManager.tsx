"use client";

import React, { useState } from "react";
import { addCourse, updateCourse, toggleHideCourse } from "./actions";

interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  syllabus: string;
  price: number | null;
  imageUrl: string | null;
  content: string | null;
  hidden: boolean;
}

export default function CourseManager({ initialCourses }: { initialCourses: Course[] }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  return (
    <div>
      {/* Header bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "28px",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "28px", fontWeight: 700 }}>Manage Courses</h1>
          <p style={{ margin: "4px 0 0", color: "var(--muted)", fontSize: "14px" }}>
            Total Courses: {initialCourses.length}
          </p>
        </div>
        <button
          onClick={() => {
            setShowAddForm(!showAddForm);
            setEditingId(null);
          }}
          style={{
            padding: "12px 24px",
            background: showAddForm ? "#6c757d" : "#4e73df",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontWeight: 600,
            fontSize: "14px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          {showAddForm ? "✕ Cancel" : "+ Add Course"}
        </button>
      </div>

      {/* Add New Course Collapsible Form */}
      {showAddForm && (
        <div
          style={{
            background: "white",
            padding: "28px",
            borderRadius: "8px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            marginBottom: "36px",
            border: "1px solid #4e73df",
          }}
        >
          <h2 style={{ fontSize: "20px", marginTop: 0, marginBottom: "20px", color: "#4e73df" }}>
            + Create New Course
          </h2>
          <form
            action={async (formData) => {
              await addCourse(formData);
              setShowAddForm(false);
            }}
            style={{ display: "grid", gap: "16px", maxWidth: "700px" }}
          >
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                Course Title *
              </label>
              <input
                name="title"
                required
                placeholder="e.g. OSH Risk Assessment Training"
                style={{ width: "100%", padding: "10px 14px", borderRadius: "6px", border: "1px solid #ccc" }}
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                  Category *
                </label>
                <input
                  name="category"
                  required
                  placeholder="e.g. OSH Training"
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "6px", border: "1px solid #ccc" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                  Price (USD, optional)
                </label>
                <input
                  name="price"
                  type="number"
                  step="0.01"
                  placeholder="e.g. 150"
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "6px", border: "1px solid #ccc" }}
                />
              </div>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                Short Description *
              </label>
              <textarea
                name="description"
                required
                rows={3}
                placeholder="Brief summary of what participants will learn..."
                style={{ width: "100%", padding: "10px 14px", borderRadius: "6px", border: "1px solid #ccc", fontFamily: "inherit" }}
              ></textarea>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                Image URL (optional)
              </label>
              <input
                name="imageUrl"
                placeholder="e.g. /images/3d/course_hazmat_3d.jpg"
                style={{ width: "100%", padding: "10px 14px", borderRadius: "6px", border: "1px solid #ccc" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                Full Content / Syllabus (optional, use newlines for bullet points)
              </label>
              <textarea
                name="content"
                rows={5}
                placeholder="List topics, outcomes, and course modules..."
                style={{ width: "100%", padding: "10px 14px", borderRadius: "6px", border: "1px solid #ccc", fontFamily: "inherit" }}
              ></textarea>
            </div>
            <input type="hidden" name="syllabus" value="See details" />
            <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
              <button
                type="submit"
                style={{
                  padding: "12px 28px",
                  background: "#4e73df",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                Save New Course
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                style={{
                  padding: "12px 20px",
                  background: "#e2e8f0",
                  color: "#334155",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Courses List */}
      <div style={{ background: "white", padding: "28px", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
        <h2 style={{ fontSize: "20px", marginTop: 0, marginBottom: "24px" }}>All Courses</h2>
        {initialCourses.length === 0 ? (
          <p style={{ color: "var(--muted)" }}>No courses available. Click "+ Add Course" to create one.</p>
        ) : (
          <div style={{ display: "grid", gap: "20px" }}>
            {initialCourses.map((course) => {
              const isEditing = editingId === course.id;

              return (
                <div
                  key={course.id}
                  style={{
                    border: course.hidden ? "1px dashed #cbd5e1" : "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "20px",
                    background: isEditing ? "#f8fafc" : course.hidden ? "#f1f5f9" : "#ffffff",
                    opacity: course.hidden && !isEditing ? 0.75 : 1,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.02)",
                  }}
                >
                  {isEditing ? (
                    /* Edit Form */
                    <form
                      action={async (formData) => {
                        await updateCourse(formData);
                        setEditingId(null);
                      }}
                      style={{ display: "grid", gap: "14px" }}
                    >
                      <input type="hidden" name="id" value={course.id} />
                      <h3 style={{ margin: "0 0 8px", fontSize: "16px", color: "#4e73df" }}>
                        Edit Course Details
                      </h3>
                      <div>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: 600, marginBottom: "4px" }}>Title</label>
                        <input
                          name="title"
                          defaultValue={course.title}
                          required
                          style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc" }}
                        />
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "12px", fontWeight: 600, marginBottom: "4px" }}>Category</label>
                          <input
                            name="category"
                            defaultValue={course.category}
                            required
                            style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc" }}
                          />
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "12px", fontWeight: 600, marginBottom: "4px" }}>Price (USD)</label>
                          <input
                            name="price"
                            type="number"
                            step="0.01"
                            defaultValue={course.price ?? ""}
                            style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc" }}
                          />
                        </div>
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: 600, marginBottom: "4px" }}>Short Description</label>
                        <textarea
                          name="description"
                          defaultValue={course.description}
                          required
                          rows={3}
                          style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc", fontFamily: "inherit" }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: 600, marginBottom: "4px" }}>Image URL</label>
                        <input
                          name="imageUrl"
                          defaultValue={course.imageUrl || ""}
                          style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc" }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: 600, marginBottom: "4px" }}>Full Content / Syllabus</label>
                        <textarea
                          name="content"
                          defaultValue={course.content || ""}
                          rows={4}
                          style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc", fontFamily: "inherit" }}
                        />
                      </div>
                      <input type="hidden" name="syllabus" value={course.syllabus} />
                      <div style={{ display: "flex", gap: "10px", marginTop: "6px" }}>
                        <button
                          type="submit"
                          style={{
                            padding: "8px 20px",
                            background: "#0284c7",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            fontWeight: 600,
                            cursor: "pointer",
                          }}
                        >
                          Update Course
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingId(null)}
                          style={{
                            padding: "8px 16px",
                            background: "#e2e8f0",
                            color: "#334155",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    /* Display Card */
                    <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", flexWrap: "wrap" }}>
                      {course.imageUrl && (
                        <img
                          src={course.imageUrl}
                          alt={course.title}
                          style={{ width: "90px", height: "70px", objectFit: "cover", borderRadius: "6px", border: "1px solid #eee" }}
                        />
                      )}
                      <div style={{ flex: 1, minWidth: "260px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span
                            style={{
                              fontSize: "11px",
                              textTransform: "uppercase",
                              fontWeight: 700,
                              color: "#4e73df",
                              letterSpacing: "0.05em",
                            }}
                          >
                            {course.category}
                            {course.price && (
                              <span style={{ marginLeft: "10px", color: "#28a745" }}>${course.price}</span>
                            )}
                          </span>
                          {course.hidden && (
                            <span
                              style={{
                                fontSize: "10px",
                                fontWeight: 700,
                                background: "#f59e0b",
                                color: "white",
                                padding: "2px 8px",
                                borderRadius: "10px",
                                letterSpacing: "0.05em",
                              }}
                            >
                              HIDDEN FROM PUBLIC
                            </span>
                          )}
                        </div>
                        <h3 style={{ margin: "4px 0 8px", fontSize: "17px", fontWeight: 700, color: "#0F172A" }}>
                          {course.title}
                        </h3>
                        <p style={{ margin: 0, fontSize: "14px", color: "var(--muted)", lineHeight: 1.5 }}>
                          {course.description}
                        </p>
                      </div>

                      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <button
                          onClick={() => setEditingId(course.id)}
                          style={{
                            padding: "8px 16px",
                            background: "#3b82f6",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            fontSize: "13px",
                            fontWeight: 600,
                            cursor: "pointer",
                          }}
                        >
                          Edit
                        </button>
                        <form action={toggleHideCourse}>
                          <input type="hidden" name="id" value={course.id} />
                          <input type="hidden" name="hidden" value={course.hidden ? "true" : "false"} />
                          <button
                            type="submit"
                            style={{
                              padding: "8px 16px",
                              background: course.hidden ? "#10b981" : "#64748b",
                              color: "white",
                              border: "none",
                              borderRadius: "6px",
                              fontSize: "13px",
                              fontWeight: 600,
                              cursor: "pointer",
                            }}
                          >
                            {course.hidden ? "Unhide" : "Hide"}
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
