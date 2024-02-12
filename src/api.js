import axios from 'axios';

const searchImages=async(term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID ' // than Client-ID write the Acsess-key in Unsplash Developers
      },
      params:{
        query:term
      }
    });
    debugger;
    return response.data.results;
  }

  export default searchImages;