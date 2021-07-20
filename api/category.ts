import fetch from "node-fetch";
import { Post, EntityId } from "../shared/types";
import { config } from "./config";

export async function fetchPosts(categoryId: EntityId): Promise<Post[]> {
  const url = `${config.baseUrl}/categories/${categoryId}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
