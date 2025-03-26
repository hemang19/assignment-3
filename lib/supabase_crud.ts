import supabase from "../lib/supabase";

const TABLE_NAME = "user_details";

// Get all users from the database
export async function getUsers() {
  const { data, error } = await supabase.from(TABLE_NAME).select("*");
  if (error) {
    throw error;
  }
  return data;
}

// Insert a new user
export async function insertUser(userData) {
  const { data, error } = await supabase.from(TABLE_NAME).insert([userData]);
  if (error) {
    throw error;
  }
  return data;
}

// Update an existing user
export async function updateUser(userId, updatedData) {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update(updatedData)
    .eq("id", userId);
  if (error) {
    throw error;
  }
  return data;
}

// Delete a user
export async function deleteUser(userId) {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .delete()
    .eq("id", userId);
  if (error) {
    throw error;
  }
  return data;
}
