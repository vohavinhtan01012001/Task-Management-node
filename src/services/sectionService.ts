import Section from "../models/Section";
import Project from "../models/Project";
import Task from "../models/Task";

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

export const updateSectionService = async (id:number,section:any) =>{
   try {
    if(!id){
        throw new Error("Please Not enough information");
    }
    const sectionUpdate = await Section.update({...section},{where:{id:id}});
    return sectionUpdate;
   } catch (error) {
    throw new Error("Please Not enough information");
   }
};

export const deleteSectionService = async (id: number) => {
    try {
        if (!id) {
            throw new Error("Invalid ID: ID is required for deletion");
        }
        const checkSection = await Section.findOne({where:{id:id}});
        if(!checkSection) {
            throw new Error("Section not found");
        }
        await Task.destroy({where: { sectionId: id}});
        const sectionDelete = await Section.destroy({where: { id: checkSection.id }});
        
        if (sectionDelete === 0) {
            throw new Error(`No section found with ID: ${id}`);
        }

        return sectionDelete;
    } catch (error) {
        if (error.message === "Invalid ID: ID is required for deletion" || error.message.startsWith("No section found")) {
            throw error;
        } else {
            throw new Error("An error occurred while deleting the section");
        }
    }
};


export const copySectionService = async (id: number) => {
    try {
        if (!id) {
            throw new Error("Invalid ID: ID is required for copy");
        }
        const checkSection = await Section.findOne({where:{id:id}});
        const sections = await Section.findAll({where:{projectId:checkSection.projectId}});
        if(!checkSection) {
            throw new Error("Section not found");
        }
        const checkTasks = await Task.findAll({where:{sectionId:checkSection.id}});
        const { priority } = sections.reduce(
            (max, current) => {
            return max.priority > current.priority ? max : current;
        }, sections[0]);
        const copySection = await Section.create({
            title: checkSection.title,
            projectId: checkSection.projectId,
            userId: checkSection.userId,
            priority: priority + 1,
        });
        
        for (const element of checkTasks) {
            try {
                await Task.create({
                    title:element.title,
                    note:element.note,
                    favorite:element.favorite,
                    color:element.color,
                    userId:element.userId,
                    priority:element.priority,
                    subTaskId:element.subTaskId,
                    projectId:element.projectId,
                    sectionId: copySection.id,
                });
                console.log(`Task ${id} copied to section ${copySection.id}`);
            } catch (error) {
                console.error(`Error copying task ${id} to section ${copySection.id}`, error);
            }
        }
        return true;
    } catch (error) {
        if (error.message === "Invalid ID: ID is required for deletion" || error.message.startsWith("No section found")) {
            throw error;
        } else {
            throw new Error("An error occurred while deleting the section");
        }
    }
};