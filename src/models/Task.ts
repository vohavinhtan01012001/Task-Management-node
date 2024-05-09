import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db/connection";
import User from "./User";
import Project from "./Project";
import Section from "./Section";

class Task extends Model {
    public id!: number;
    public title!: string;
    public note!: string;
    public favorite!: number;
    public color!: string;
    public userId!: number;
    public priority!: number;
    public subTaskId!: number;
    public sectionId!: number;
    public projectId!: number;
    // timestamps!
    public readonly created_at!: Date;    
    public readonly last_updated!: Date;

}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    startDate: {
        type:DataTypes.STRING,
        allowNull: true,
    },
    endDate: {
        type:DataTypes.STRING,
        allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    subTaskId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    sectionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    color:{
      type: DataTypes.STRING,
      defaultValue:"#333",
      allowNull: false,
    }
  },
  {
    sequelize: sequelizeConnection,
    tableName: "tasks",
    createdAt: "created_at",
    updatedAt: "last_updated",
  }
);

Task.belongsTo(Task, { foreignKey: "subTaskId", targetKey: "id" });
Task.belongsTo(User, { foreignKey: "userId", targetKey: "id" });
Task.belongsTo(Project, { foreignKey: "projectId", targetKey: "id" });
Task.belongsTo(Section, { foreignKey: "sectionId", targetKey: "id" });


export default Task;
