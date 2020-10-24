import {db} from './setup';


export async function createRonda(data){
    return await db
    .collection('rondaPork')
    .doc()
    .set(data);
}
export async function deleteRonda(id){
    return await db
    .collection('rondaPork')
    .doc(id)
    .delete();
}
export async function updateRonda(id, data){
    return await db
    .collection('rondaPork')
    .doc(id)
    .update(data);
}