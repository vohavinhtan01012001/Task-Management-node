import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db/connection";
import Task from "./Task";
import User from "./User";

class Comment extends Model {
  public id!: number;
  public title!: string;
  public projectId!: string;
  public userId!: number;
  public priority!: number;
  // timestamps!
  public readonly created_at!: Date;
  public readonly last_updated!: Date;

}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    taskId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "comments",
    createdAt: "created_at",
    updatedAt: "last_updated",
  }
);
Comment.belongsTo(User, { foreignKey: "userId", targetKey: "id" });
Comment.belongsTo(Task, { foreignKey: "taskId", targetKey: "id" });

export default Comment;
