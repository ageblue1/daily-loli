import{d as R,r as b,g as d,s as c}from"./index-Bxe9LT4U.js";const O=R("favorites",()=>{const i=b([]);function a(){const t=d().exec(`
      SELECT f.id, f.name, f.created_at, COUNT(fi.id) as cnt
      FROM folders f
      LEFT JOIN folder_items fi ON f.id = fi.folder_id
      GROUP BY f.id
      ORDER BY f.created_at DESC
    `);t.length>0?i.value=t[0].values.map(r=>({id:r[0]??0,name:r[1]??"",created_at:r[2]??"",characterCount:r[3]??0})):i.value=[]}function o(e){return d().run(`INSERT INTO folders (name) VALUES ('${e.replace(/'/g,"''")}')`),c(),a(),i.value[0]}function s(e){d().run(`DELETE FROM folders WHERE id = ${e}`),c(),a()}function f(e,t){d().run(`UPDATE folders SET name = '${t.replace(/'/g,"''")}' WHERE id = ${e}`),c(),a()}function l(e,t){d().run(`INSERT OR IGNORE INTO folder_items (folder_id, character_id) VALUES (${e}, ${t})`),c(),a()}function E(e,t){d().run(`DELETE FROM folder_items WHERE folder_id = ${e} AND character_id = ${t}`),c(),a()}function u(e){const r=d().exec(`
      SELECT c.id, c.name, c.work_title
      FROM folder_items fi
      JOIN characters c ON fi.character_id = c.id
      WHERE fi.folder_id = ${e}
      ORDER BY fi.created_at DESC
    `);return r.length>0?r[0].values.map(n=>({id:n[0]??0,name:n[1]??"",work_title:n[2]??""})):[]}function _(e,t){const n=d().exec(`SELECT id FROM folder_items WHERE folder_id = ${e} AND character_id = ${t}`);return n.length>0&&n[0].values.length>0}return{folders:i,loadFolders:a,create:o,remove:s,rename:f,addCharacter:l,removeCharacter:E,getCharacters:u,isInFolder:_}});export{O as u};
