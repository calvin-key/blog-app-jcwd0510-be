import { Prisma } from "@prisma/client";
import { PaginationQueryParams } from "../../types/pagination";
import prisma from "../../lib/prisma";

interface GetBlogsQuery extends PaginationQueryParams {
  search: string;
}

export const getBlogsService = async (query: GetBlogsQuery) => {
  try {
    const { page, sortBy, sortOrder, take, search } = query;

    const whereClause: Prisma.BlogWhereInput = { deletedAt: null };

    if (search) {
      whereClause.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { category: { contains: search, mode: "insensitive" } },
      ];
      //   whereClause.title = { contains: search };
    }

    const blogs = await prisma.blog.findMany({
      where: whereClause,
      skip: (page - 1) * take,
      take: take,
      orderBy: { [sortBy]: sortOrder },
    });

    const count = await prisma.blog.count({ where: whereClause });

    return {
      data: blogs,
      meta: { page, take, total: count },
    };
  } catch (error) {
    throw error;
  }
};
