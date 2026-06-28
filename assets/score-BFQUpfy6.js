import{d as g,r as h,g as a,s as S}from"./index-D3YXcZAy.js";const O=g("score",()=>{const o=h([]);function r(){const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function d(t,s){const e=a(),c=r(),n=e.exec(`
      SELECT s.id FROM scores s
      JOIN checkins c ON s.character_id = c.character_id AND c.date = '${c}'
      WHERE s.character_id = ${t} AND s.created_at LIKE '${c}%'
      LIMIT 1
    `);if(n.length>0&&n[0].values.length>0){const E=n[0].values[0][0];e.run(`UPDATE scores SET score = ${s} WHERE id = ${E}`)}else e.run(`INSERT INTO scores (character_id, score) VALUES (${t}, ${s})`);S(),i()}function u(t){const s=a(),e=r(),c=s.exec(`
      SELECT s.score FROM scores s
      WHERE s.character_id = ${t} AND s.created_at LIKE '${e}%'
      ORDER BY s.id DESC LIMIT 1
    `);return c.length>0&&c[0].values.length>0?c[0].values[0][0]??null:null}function i(){const s=a().exec(`
      SELECT s.character_id, c.name, c.work_title,
             ROUND(AVG(s.score), 1) as avg, COUNT(*) as cnt
      FROM scores s
      JOIN characters c ON s.character_id = c.id
      GROUP BY s.character_id
      ORDER BY avg DESC, cnt DESC
      LIMIT 50
    `);s.length>0&&(o.value=s[0].values.map(e=>({character_id:e[0]??0,name:e[1]??"",work_title:e[2]??"",avg_score:e[3]??0,count:e[4]??0})))}function l(t){const e=a().exec(`SELECT ROUND(AVG(score), 1), COUNT(*) FROM scores WHERE character_id = ${t}`);if(e.length>0&&e[0].values.length>0){const c=e[0].values[0];return{avg:c[0]??0,count:c[1]??0}}return{avg:0,count:0}}return{ranking:o,submit:d,loadRanking:i,getByCharacter:l,getTodayScore:u,today:r}});export{O as u};
