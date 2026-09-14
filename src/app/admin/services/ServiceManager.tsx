"use client";

import React, { useState } from "react";
import { addService, updateService, toggleHideService } from "./actions";

interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string | null;
  content: string | null;
  hidden: boolean;
}

export default function ServiceManager({ initialServices }: { initialServices: Service[] }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  return (
    <div>
      {/* Header bar with title and Add Service button */}
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
          <h1 style={{ margin: 0, fontSize: "28px", fontWeight: 700 }}>Manage Services</h1>
          <p style={{ margin: "4px 0 0", color: "var(--muted)", fontSize: "14px" }}>
            Total Services: {initialServices.length}
          </p>
        </div>
        <button
          onClick={() => {
            setShowAddForm(!showAddForm);
            setEditingId(null);
          }}
          style={{
            padding: "12px 24px",
            background: showAddForm ? "#6c757d" : "var(--accent)",
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
          {showAddForm ? "✕ Cancel" : "+ Add Service"}
        </button>
      </div>

      {/* Add New Service Collapsible Form */}
      {showAddForm && (
        <div
          style={{
            background: "white",
            padding: "28px",
            borderRadius: "8px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            marginBottom: "36px",
            border: "1px solid var(--accent)",
          }}
        >
          <h2 style={{ fontSize: "20px", marginTop: 0, marginBottom: "20px", color: "var(--accent)" }}>
            + Create New Service
          </h2>
          <form
            action={async (formData) => {
              await addService(formData);
              setShowAddForm(false);
            }}
            style={{ display: "grid", gap: "16px", maxWidth: "700px" }}
          >
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                Service Title *
              </label>
              <input
                name="title"
                required
                placeholder="e.g. Risk Assessment & Safety Audits"
                style={{ width: "100%", padding: "10px 14px", borderRadius: "6px", border: "1px solid #ccc" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                Category *
              </label>
              <input
                name="category"
                required
                placeholder="e.g. Risk Assessment & Workplace Safety Audits"
                style={{ width: "100%", padding: "10px 14px", borderRadius: "6px", border: "1px solid #ccc" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                Short Description *
              </label>
              <textarea
                name="description"
                required
                rows={3}
                placeholder="Brief summary of what this service covers..."
                style={{ width: "100%", padding: "10px 14px", borderRadius: "6px", border: "1px solid #ccc", fontFamily: "inherit" }}
              ></textarea>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                Image URL (optional)
              </label>
              <input
                name="imageUrl"
                placeholder="e.g. /images/3d/service_audit_3d.jpg"
                style={{ width: "100%", padding: "10px 14px", borderRadius: "6px", border: "1px solid #ccc" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                Full Content / Key Deliverables (optional, use newlines for bullet points)
              </label>
              <textarea
                name="content"
                rows={5}
                placeholder="Enter detailed bullet points or description..."
                style={{ width: "100%", padding: "10px 14px", borderRadius: "6px", border: "1px solid #ccc", fontFamily: "inherit" }}
              ></textarea>
            </div>
            <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
              <button
                type="submit"
                style={{
                  padding: "12px 28px",
                  background: "var(--accent)",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                Save New Service
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

      {/* Services List / Cards */}
      <div style={{ background: "white", padding: "28px", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
        <h2 style={{ fontSize: "20px", marginTop: 0, marginBottom: "24px" }}>All Services</h2>
        {initialServices.length === 0 ? (
          <p style={{ color: "var(--muted)" }}>No services available. Click "+ Add Service" to create one.</p>
        ) : (
          <div style={{ display: "grid", gap: "20px" }}>
            {initialServices.map((service) => {
              const isEditing = editingId === service.id;

              return (
                <div
                  key={service.id}
                  style={{
                    border: service.hidden ? "1px dashed #cbd5e1" : "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "20px",
                    background: isEditing ? "#f8fafc" : service.hidden ? "#f1f5f9" : "#ffffff",
                    opacity: service.hidden && !isEditing ? 0.75 : 1,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.02)",
                  }}
                >
                  {isEditing ? (
                    /* Edit Form */
                    <form
                      action={async (formData) => {
                        await updateService(formData);
                        setEditingId(null);
                      }}
                      style={{ display: "grid", gap: "14px" }}
                    >
                      <input type="hidden" name="id" value={service.id} />
                      <h3 style={{ margin: "0 0 8px", fontSize: "16px", color: "var(--accent)" }}>
                        Edit Service Details
                      </h3>
                      <div>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: 600, marginBottom: "4px" }}>
                          Title
                        </label>
                        <input
                          name="title"
                          defaultValue={service.title}
                          required
                          style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc" }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: 600, marginBottom: "4px" }}>
                          Category
                        </label>
                        <input
                          name="category"
                          defaultValue={service.category}
                          required
                          style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc" }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: 600, marginBottom: "4px" }}>
                          Short Description
                        </label>
                        <textarea
                          name="description"
                          defaultValue={service.description}
                          required
                          rows={3}
                          style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc", fontFamily: "inherit" }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: 600, marginBottom: "4px" }}>
                          Image URL
                        </label>
                        <input
                          name="imageUrl"
                          defaultValue={service.imageUrl || ""}
                          style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc" }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "12px", fontWeight: 600, marginBottom: "4px" }}>
                          Full Content Details
                        </label>
                        <textarea
                          name="content"
                          defaultValue={service.content || ""}
                          rows={4}
                          style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc", fontFamily: "inherit" }}
                        />
                      </div>
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
                          Update Service
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
                      {service.imageUrl && (
                        <img
                          src={service.imageUrl}
                          alt={service.title}
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
                              color: "var(--accent)",
                              letterSpacing: "0.05em",
                            }}
                          >
                            {service.category}
                          </span>
                          {service.hidden && (
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
                          {service.title}
                        </h3>
                        <p style={{ margin: 0, fontSize: "14px", color: "var(--muted)", lineHeight: 1.5 }}>
                          {service.description}
                        </p>
                      </div>

                      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <button
                          onClick={() => setEditingId(service.id)}
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
                        <form action={toggleHideService}>
                          <input type="hidden" name="id" value={service.id} />
                          <input type="hidden" name="hidden" value={service.hidden ? "true" : "false"} />
                          <button
                            type="submit"
                            style={{
                              padding: "8px 16px",
                              background: service.hidden ? "#10b981" : "#64748b",
                              color: "white",
                              border: "none",
                              borderRadius: "6px",
                              fontSize: "13px",
                              fontWeight: 600,
                              cursor: "pointer",
                            }}
                          >
                            {service.hidden ? "Unhide" : "Hide"}
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
