import React, { useEffect, useState } from 'react';
import { API_LINK_CATEGORY_READ } from '../../api_link';

export default function Category(props) {
    const label_category = {
        paddingRight: "50px",
    }
    const input_category = {
        marginLeft: "10px"
    }

    const [radioName, setRadioName] = useState(false);
    const [radioCate, setRadioCate] = useState(false);
    const [categories, setCategories] = useState([]);
    
    // check name radiobutton
    const handleRadioChange = () => {
        if (radioName) {
            props.setSearchType("name");
            return 'name'
        }
        if (radioCate) {
            props.setSearchType("category");
            return 'category'
        }
    };

    
    useEffect(() => {
        async function fetchListCategories() {
            const response = await fetch(API_LINK_CATEGORY_READ);
            const result = await response.json();
            setCategories(result);
        }
        fetchListCategories();
    }, []);
    return (
        <React.Fragment>
            <div className="row">
                <div className="from-cate-delete mt-4">
                    <div className="from-category">
                        <label style={label_category}>
                            Search by Category
                            <input style={input_category} name="radiodelete" type="radio" checked={radioCate} onChange={() => { setRadioCate(true); setRadioName(false); }} />
                        </label>

                        <label>
                            Search by Recipe name
                            <input style={input_category} name="radiodelete" type="radio" checked={radioName} onChange={() => { setRadioCate(false); setRadioName(true); }} />
                        </label>
                    </div>
                </div>
            </div>
            <div id="selectoption-top" className="mt-4">
            {handleRadioChange() === 'category' &&
                (
                    <select className="selectoption_from" onChange={e => props.setCategoryValue(e.target.value)} >
                        {
                            categories.map((category) =>
                                <option value={category.id} key={category.id}>{category.name}</option>
                            )
                        }
                    </select>
                )
            }
            </div>
        </React.Fragment>
    )
}
