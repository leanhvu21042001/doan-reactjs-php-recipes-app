import React from 'react'
export default function Search() {
    return (
        <div className="col-12 ">
            <div className="search-recipe">
                <h3 className="title">Search Recipes</h3>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                    <form action="" method="post" className="form-search">
                    <input type="text" id="input--search" />
                    <button type="button" class="btn btn-primary btn-search">
                        <svg className="icon-search" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32' /><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32' d='M338.29 338.29L448 448' /></svg>
                    </button>
                </form>
                    </div>
                </div>
            </div>
        </div>

    )
}