import ApiConfig from "./ApiConfig";

export const AddPlansApi = async(PlansData)=>{
    return await ApiConfig("post","/allPlans",PlansData)
};

export const getPlansApi = async()=>{
    return await ApiConfig("get",'/allPlans',"")
}

export const deletePlansApi = async(planId)=>{
    return await ApiConfig('delete',`/allPlans/${planId}`,{})
}

export const markAsCompletedApi = async (planId)=>{
    return await ApiConfig('patch',`/allPlans/${planId}`,{ completed: true })
}

export const getCompletedPlansApi = async ()=>{
    return await ApiConfig('get','/allPlans',"")
}

export const editPlanApi = async(planId,updateData)=>{
    return await ApiConfig('put',`/allPlans/${planId}`,updateData)
}