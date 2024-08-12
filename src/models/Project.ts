import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db/connection";
import User from "./User";
import Section from "./Section";

class Project extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public favorite!: number;
  public color!: string;
  public userId!: number;
  public priority!: number;
  // timestamps!
  public readonly created_at!: Date;
  public readonly last_updated!: Date;

}

Project.init(
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
    description: {
      type: DataTypes.TEXT,
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
    favorite: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
      validate: {
        isIn: [[0, 1]] 
      }
    },
    color:{
      type: DataTypes.STRING,
      defaultValue:"#333",
      allowNull: false,
    }
  },
  {
    sequelize: sequelizeConnection,
    tableName: "projects",
    createdAt: "created_at",
    updatedAt: "last_updated",
  }
);

///Chỉnh chỗ này
Project.belongsTo(User, { foreignKey: "userId", targetKey: "id" });


export default Project;
