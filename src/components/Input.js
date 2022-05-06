import React from "react";
import {SearchInput, SearchInputContainer} from "../styles/SearchInput.style";
import { connect } from 'react-redux'
import {saveValue,searchPlayer} from '../redux/actions/playerActions'


const Input = ({saveValue,searchPlayer}) => {
    const valueForFilter = (e) => {
        saveValue(e.target.value)
        searchPlayer(e.target.value)
    }
    return (
        <div>
            <SearchInputContainer>
                <SearchInput placeholder="search player" type="text"
                             onChange={valueForFilter}></SearchInput>
            </SearchInputContainer>
        </div>
    );
};

export default connect(null, {saveValue, searchPlayer})(Input);
