import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db/connection";

class Project extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public favorite!: number;
  public color!: string;
  // timestamps!
  public readonly created_at!: Date;
  public readonly last_updated!: Date;

  static validPassword: (password: string, hash: string) => boolean;
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


export default Project;
