import Section from "../models/Section";

export const getSectionAll = async (projectId:number)=> {
    const sections = await Section.findAll({where: {projectId: projectId}});
    const listSection = sections.sort((a, b) => a.priority - b.priority);
    return listSection;
};


export const createSectionService = async (payload: any) => {
    let section;
    const sections = await Section.findAll({where: {projectId: payload.projectId}});
    if(sections.length > 0){
        const { priority } = sections.reduce(
            (max, current) => {
            return max.priority > current.priority ? max : current;
        }, sections[0]);
        section = await Section.create({...payload, priority: priority + 1});
    }
    else{
        section = await Section.create(payload);
    }
    return section;
};


export const updatePriorityService = async (priorities:any[]) =>{
    if(priorities.length <= 0)
    {
        throw new Error("Please Not enough information");
    }
    else{
        priorities.forEach( async(item) =>{
            await Section.update({priority: item.priority},{where:{id:item.id}});
        });
    }
};