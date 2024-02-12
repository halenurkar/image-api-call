import { useState } from 'react';

function SearchHeader({search}) {
    const [valueInput, setValue] = useState('');
    const handleFormSubmit=(event)=>{
      event.preventDefault();
      search(valueInput);
    };

    const handleCahnge=(event)=>{
      setValue(event.target.value);
    };
  
      return (
        <div className="searchDiv">
          <form onSubmit={handleFormSubmit}>
            <label>Ne Arıyorsunuz?</label>
            <input value={valueInput} onChange={handleCahnge} />
          </form>
        </div>
      );
    }
    
    export default SearchHeader;
    