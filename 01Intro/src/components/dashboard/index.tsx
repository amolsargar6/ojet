import { h } from "preact";
import ArrayDataProvider = require('ojs/ojarraydataprovider');
import { ojSelectSingle } from 'ojs/ojselectsingle';
import 'ojs/ojselectsingle';
import 'ojs/ojchart'
import { useMemo, useState } from "preact/hooks";
import * as data from 'text!./data.json';




//data
const moviesDetails = JSON.parse(data);
const movies = [
    { value: 'Avengers: Endgame', label: 'Avengers: Endgame' },
    { value: 'Titanic', label: 'Titanic' },
    { value: 'Avatar', label: 'Avatar' },
    { value: 'Joker', label: 'Joker' },
    { value: 'The Lion King', label: 'The Lion King' },
    { value: 'The Dark Knight', label: 'The Dark Knight' },
    { value: 'It', label: 'It' },
    { value: 'Inception', label: 'Inception' },
    { value: 'Black Panthe', label: 'Black Panthe' },
    { value: 'Frozen II', label: 'Frozen II' }
];




export function Dashboard() {
    const [selectedMovie, setSelectedMovie] = useState<string | null>('Avengers: Endgame');
    // const [selectePrevMovie, setSelectedPrevMovie] = useState<string>(null);

    // const moviesCollectionDP = useMemo(() => {

    //     //moviesDetails.movies[selectedMovie]
    //     return new ArrayDataProvider(moviesDetails[selectedMovie], {
    //         keyAttributes: 'id',
    //     });

    // }, [selectedMovie, setSelectedMovie]);
    const activitiesDP = new ArrayDataProvider(movies, {
        keyAttributes: 'value'
    });

    const valueChanged = (event: ojSelectSingle.valueChanged<string, string>) => {
        setSelectedMovie(event.detail.value);
        // setSelectedPrevMovie(event.detail.previousValue);
        console.log(event.detail.value);
        console.log(event.detail);
        
    }
    
return (
    <>
    <oj-select-single
        id="select1"
        labelHint="Select your favorite movie"
        labelEdge="inside"
        class="oj-form-control-max-width-md"
        data={activitiesDP}
        itemText={"label"}
        onvalueChanged={valueChanged}
    ></oj-select-single>
    <h3>{selectedMovie}</h3>

    <div>
        <oj-chart
            id="pieChart"
            type="pie"
            //data={moviesCollectionDP}
            animation-on-display="auto"
            animation-on-data-change="auto"
        >

        </oj-chart>
    </div>
    </>
);
}