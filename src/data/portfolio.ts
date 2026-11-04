// Add, remove or reorder entries here. The UI numbers the works automatically.
export const retouchWorks = [
 {id:'beauty-05',title:'BEAUTY RETOUCH',subtitle:'ビューティーレタッチ（映像）',video:'./05_before_after.mp4?v=4loops',poster:'./05-poster.webp?v=4loops'},
 {id:'video-03',title:'VIDEO RETOUCH',subtitle:'映像レタッチ',video:'./03_before_after.mp4?v=4loops',poster:'./03-poster.webp?v=4loops'},
];
export const webProject={url:'https://maya-washiya.github.io/aurelia-skin-lab/'};
// Use only an address explicitly provided as the portfolio contact.
export const contactEmail:string='';
export const toolList=[
 {name:'Autodesk Flame',use:'Video Retouch / Beauty Retouch',mark:'Fl'},
 {name:'Adobe Premiere Pro',use:'Video Editing',mark:'Pr'},
 {name:'Adobe Photoshop',use:'Image Retouch',mark:'Ps'},
 {name:'Adobe Illustrator',use:'Graphic Design',mark:'Ai'},
 {name:'ChatGPT / Codex',use:'AI-assisted Web Development',mark:'AI'},
];

// Application projects follow the web concept project. No public app links.
export const applicationProjects = [{
 id: 'ai-personal-secretary',
 title: 'AI PERSONAL SECRETARY',
 category: 'PERSONAL PROJECT / AI APPLICATION',
 role: 'Planning / UI・UX Design / AI-assisted Development',
 summary: [
  '日々の予定管理をより直感的かつ効率的に行うことを目的として、生成AIを活用したパーソナルスケジュール管理アプリを個人開発。',
  '企画・画面構成・デザイン方針を自身で設計し、ChatGPT・Codexを活用して実装。使いやすさと視覚的な統一感を重視しながら、機能の検証と改善を行っています。',
 ],
 tools: ['ChatGPT', 'Codex', 'Gemini', 'Supabase', 'Vercel'],
 status: '個人利用向けアプリのため、本体は非公開。',
 screenshots: [
  {src:'./ai-secretary-home.png',width:852,height:1846,alt:'AI PERSONAL SECRETARYのホーム画面。日付・カレンダー・予定カードを表示。個人的な予定名は非表示。',caption:'HOME'},
  {src:'./ai-secretary-chat.png',width:1179,height:2556,alt:'AI PERSONAL SECRETARYのAI秘書画面。チャット入力と予定登録の案内を表示。',caption:'AI SECRETARY'},
 ],
}];
