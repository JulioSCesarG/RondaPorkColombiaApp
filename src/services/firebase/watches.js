import {db} from './setup';


export function watchrondaPork(callback){
    const unsub = db
        .collection('rondaPork')
        .onSnapshot((snapshot)=>{
            const docs = [];
            snapshot.forEach((doc)=>{
                const data = doc.data();
                docs.push({
                    ...data,
                    id: doc.id,
                });
            });
            callback(docs);
        });
        return unsub;
}