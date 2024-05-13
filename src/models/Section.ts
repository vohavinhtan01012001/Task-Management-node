import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db/connection";
import Project from "./Project";
import User from "./User";

class Section extends Model {
  public id!: number;
  public title!: string;
  public projectId!: string;
  public userId!: number;
  public priority!: number;
  // timestamps!
  public readonly created_at!: Date;
  public readonly last_updated!: Date;

}

Section.init(
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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "sections",
    createdAt: "created_at",
    updatedAt: "last_updated",
  }
);

Section.belongsTo(Project, { foreignKey: "projectId", targetKey: "id" });
Section.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

export default Section;
