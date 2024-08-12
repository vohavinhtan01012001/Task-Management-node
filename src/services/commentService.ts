import User from "../models/User";
import Comment from "../models/Comment";

export const getCommentAllService = async (taskId: number) => {
    const comments = await Comment.findAll({
        include: [
            {
                model: User,
                attributes: { exclude: ["password"] }
            }
        ],
        where: { taskId }
    });
    return comments;
};

export const createCommentService = async (payload: any) => {
    const comment = await Comment.create(payload);
    return comment;
};
