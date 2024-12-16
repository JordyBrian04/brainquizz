import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('brainquiz.db');

// db.transaction(txn => {
//     txn.executeSql(
//         'CREATE TABLE IF NOT EXISTS data (id INTEGER PRIMARY KEY AUTOINCREMENT, image TEXT NULL);',
//         [],
//         (_, result) => {
//             txn.executeSql(
//                 'SELECT * FROM data;',
//                 [],
//                 (_, results:any) => {
//                   if(results.rows.length === 0){
//                     txn.executeSql(
//                       'INSERT INTO data (image) VALUES (?);',
//                       [''],
//                       (_, result) => {
//                         console.log(result.rows._array)
//                       },
//                       (_, error) => {
//                         console.error('Error inserting data:', error);
//                         return false;
//                       }
//                     );
//                     }
//                 //   console.log('Query result:', results.rows.length); // Log the row count
//                 //   for (let i = 0; i < result.rows.length; i++) {
//                 //     console.log('Row:', result.rows.item(i));
//                 //   }
//                 },
//                 (_, error:any) => {
//                   console.error('Error querying data:', error);
//                   return false
//                 }
//               );
//         },
//         (_, error) => {
//             console.error(error);
//             return false;
//         }
//     )
// })

export default db;
