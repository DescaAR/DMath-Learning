export type ParsedYouTubeVideo = {
  id: string;
  watchUrl: string;
  embedUrl: string;
};

/** Accept only explicit, genuine YouTube hostnames and 11-character video IDs. */
export function parseYouTubeVideo(input: string): ParsedYouTubeVideo | null {
  const text=input.trim();
  if(!text || text.length>2048)return null;
  try{
    const url=new URL(text.startsWith("youtu.be/")||text.startsWith("youtube.com/")||text.startsWith("www.youtube.com/")? "https://"+text:text);
    if(url.protocol!=="https:" && url.protocol!=="http:")return null;
    const host=url.hostname.toLowerCase();
    const fullHosts=["youtube.com","www.youtube.com","m.youtube.com","music.youtube.com","youtube-nocookie.com","www.youtube-nocookie.com"];
    let id:string|null=null;
    if(host==="youtu.be"||host==="www.youtu.be"){
      id=url.pathname.split("/").filter(Boolean)[0]??null;
    }else if(fullHosts.includes(host)){
      const parts=url.pathname.split("/").filter(Boolean);
      if(parts[0]==="watch")id=url.searchParams.get("v");
      else if(["shorts","embed","live","v"].includes(parts[0]))id=parts[1]??null;
    }else return null;
    if(!id || !/^[a-zA-Z0-9_-]{11}$/.test(id))return null;
    return {
      id,
      watchUrl:"https://www.youtube.com/watch?v="+id,
      embedUrl:"https://www.youtube-nocookie.com/embed/"+id+"?rel=0",
    };
  }catch{return null;}
}
