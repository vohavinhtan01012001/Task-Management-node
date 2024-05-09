import Section from "../models/Section";

export const getSectionAll = async (projectId:number)=> {
    const sections = await Section.findAll({where: {projectId: projectId}});
    return sections;
};


export const createSectionService = async (payload: any) => {
    const section = await Section.create(payload);
    return section;
};

