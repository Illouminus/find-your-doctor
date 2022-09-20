import React, { useEffect } from 'react'
import s from './styles.module.css'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

 export const Autocomplete = ({isLoaded, onSelect, docs}: any) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    init,
    clearSuggestions,
  } = usePlacesAutocomplete({
    initOnMount: false,
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  // const handleInput = (e: any) => {
  //   // Update the keyword of the input element
  //   setValue(e.target.value);
  // };

  console.log('DOCTORS AUTOCOMPLETE',docs)
  useEffect(() => {
    const address = docs.map((el: any) => el.adress)
    console.log('ADRESS OF DOCTOR MOTHER FATHER', address);
    
  }, [docs])

  const handleSelect =
    ({ description }: any) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      console.log('DESCRIPTION AUTOCOMPLETE', description);
      
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log("📍 Coordinates: ", { lat, lng });
        onSelect({ lat, lng } )
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li className={s.listItem} key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

     useEffect(() => {
      if (isLoaded) {
        init()
      }
     }, [isLoaded, init])

  return (
    <div className={s.root} ref={ref}>
      {/* <input type="text"
       className={s.input}
       value={value}
       onChange={handleInput}
       disabled={!ready}
       placeholder="Where are you going?"
       /> */}
      {status === "OK" && <ul className={s.sugestions}>{renderSuggestions()}</ul>}
    </div>
  )
}

