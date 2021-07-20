import { EntityId, Category } from "./types";

type PostStaticParams = {
  id: EntityId;
};

type PostStaticPath = {
  params: PostStaticParams;
};

type CategoryStaticParams = {
	id: EntityId;
}

type CategoryStaticPath = {
	params: CategoryStaticParams
}

const staticPostsIdList: EntityId[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const postPaths: PostStaticPath[] = staticPostsIdList.map((id) => ({
  params: { id: String(id) },
}));

const categoriesToPreRender: Category[] = ["Science", "Technology", "Arts"];

export const categoryPaths: CategoryStaticPath[] = categoriesToPreRender.map(
  (category) => {
    return { params: { id: category } };
  }
);
