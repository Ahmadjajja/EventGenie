import React, { useState } from "react";
import searchDumyData from "../../DumyData/SearchData";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
const initialSearchData = {
  eventName: "",
  eventsOnly: false,
  onlineEvents: false,
  date: "",
  category: "",
  location: "",
};
function LandingPage() {
  const [filter, setFilter] = useState("d-none");
  const [inputValue, setInputValue] = useState("");
  const [showEventsOnly, setShowEventsOnly] = useState(false);
  const [searchOnlineEvents, setSearchOnlineEvents] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const [isHaveInputValue, setIsHaveInputValue] = useState(true);
  const handleCategoryChange = (e) => {
    console.log(e.target.value);
    setSelectedCategory(e.target.value);
  };
  const handleDateChange = (e) => {
    console.log(e.target.value);
    setSelectedDate(e.target.value);
  };
  const handleShowEventsOnlyChange = (e) => {
    console.log(e.target.checked);
    setShowEventsOnly(e.target.checked);
  };

  const handleSearchOnlineEventsChange = (e) => {
    console.log(e.target.checked);
    setSearchOnlineEvents(e.target.checked);
  };
  const filterHandler = () => {
    console.log("filter : ", filter);
    if (filter == "d-block") {
      setFilter("d-none");
    } else {
      setFilter("d-block");
    }
  };
  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const searchHandler = (e) => {
    setFilter("d-none");
    const searchTempData = {
      eventName: inputValue,
      eventsOnly: showEventsOnly,
      onlineEvents: searchOnlineEvents,
      date: selectedDate,
      category: selectedCategory,
    };
    console.log(searchTempData);
    // eventOnly filtered data
    let filteredData = searchDumyData.filter((record) =>
      searchTempData.eventsOnly == false ? true : record.eventsOnly
    );
    // onlineEvents filtered data
    filteredData = filteredData.filter((record) =>
      searchTempData.onlineEvents == false ? true : record.onlineEvents
    );
    // eventName filtered data
    filteredData = filteredData.filter((record) => {
      return searchTempData.eventName == ""
        ? true
        : record.eventName == searchTempData.eventName;
    });
    // date filtered data
    filteredData = filteredData.filter((record) =>
      searchTempData.date == "" ? true : record.date == searchTempData.date
    );
    // category filtered data
    filteredData = filteredData.filter((record) =>
      searchTempData.category == ""
        ? true
        : record.category == searchTempData.category
    );
    console.log("filteredData ", filteredData);
    // if (searchTempData.eventName == "") {
    //   setIsHaveInputValue(false);
    // } else {
    // }
    setDataToDisplay(filteredData);
    setSelectedCategory("");
    setSelectedDate("");
    setSearchOnlineEvents(false);
    setShowEventsOnly(false);
    setInputValue("");
  };

  return (
    // <main>
    <div className="landingPage">
      <div className="container">
        {/* Navbar & Search Option */}
        <div className="row mb-5">
          <div className="col-lg-2 col-md-2 col-sm-1"></div>
          <div className="col-lg-8 col-md-8 col-sm-10">
            <div className="row">
              <div className="col">
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with segmented dropdown button"
                    onChange={inputChangeHandler}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={searchHandler}
                  >
                    Search
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={filterHandler}
                  >
                    Filters
                  </button>
                </div>
              </div>
            </div>
            <div className={filter}>
              <div className="row">
                <div className="col my-3">
                  <h3>Filters</h3>
                </div>
              </div>
              {/* Checkboxes */}
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <h5>Checkboxes</h5>
                    </div>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={showEventsOnly}
                      id="showEventsOnly"
                      onChange={handleShowEventsOnlyChange}
                      checked={showEventsOnly}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="showEventsOnly"
                    >
                      Only show events from organizers I follow
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={searchOnlineEvents}
                      id="searchOnlineEvents"
                      onChange={handleSearchOnlineEventsChange}
                      checked={searchOnlineEvents}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="searchOnlineEvents"
                    >
                      Search for online events
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                {/* Date */}
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <h5>Date</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefaultfirst"
                          value="today"
                          id="flexRadioDefaultfirst1"
                          checked={selectedDate === "today"}
                          onChange={handleDateChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefaultfirst1"
                        >
                          Today
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefaultfirst"
                          value="tomorrow"
                          id="flexRadioDefaultfirst2"
                          checked={selectedDate === "tomorrow"}
                          onChange={handleDateChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefaultfirst2"
                        >
                          Tomorrow
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefaultfirst"
                          value="weekend"
                          id="flexRadioDefaultfirst3"
                          checked={selectedDate === "weekend"}
                          onChange={handleDateChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefaultfirst3"
                        >
                          This weekend
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Category */}
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <h5>Category</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          value="business"
                          id="flexRadioDefault1"
                          checked={selectedCategory === "business"}
                          onChange={handleCategoryChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Business
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          value="food_drink"
                          id="flexRadioDefault2"
                          checked={selectedCategory === "food_drink"}
                          onChange={handleCategoryChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          Food & Drink
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          value="health"
                          id="flexRadioDefault3"
                          checked={selectedCategory === "health"}
                          onChange={handleCategoryChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault3"
                        >
                          Health
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          value="music"
                          id="flexRadioDefault4"
                          checked={selectedCategory === "music"}
                          onChange={handleCategoryChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault4"
                        >
                          Music
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          value="auto_boat_and_air"
                          id="flexRadioDefault5"
                          checked={selectedCategory === "auto_boat_and_air"}
                          onChange={handleCategoryChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault5"
                        >
                          Auto Boat and Air
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          value="charity_and_cause"
                          id="flexRadioDefault6"
                          checked={selectedCategory === "charity_and_cause"}
                          onChange={handleCategoryChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault6"
                        >
                          Charity & Causes
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          value="community"
                          id="flexRadioDefault7"
                          checked={selectedCategory === "community"}
                          onChange={handleCategoryChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault7"
                        >
                          Community
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          value="family_and_education"
                          id="flexRadioDefault8"
                          checked={selectedCategory === "family_and_education"}
                          onChange={handleCategoryChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault8"
                        >
                          Family and Education
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          value="fashion"
                          id="flexRadioDefault9"
                          checked={selectedCategory === "fashion"}
                          onChange={handleCategoryChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault9"
                        >
                          Fashion
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          value="film_and_media"
                          id="flexRadioDefault10"
                          checked={selectedCategory === "film_and_media"}
                          onChange={handleCategoryChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault10"
                        >
                          Film & media
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          value="hobbies"
                          id="flexRadioDefault11"
                          checked={selectedCategory === "hobbies"}
                          onChange={handleCategoryChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault11"
                        >
                          Hobbies
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          value="hobbies"
                          id="flexRadioDefault12"
                          checked={selectedCategory === "hobbies"}
                          onChange={handleCategoryChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault12"
                        >
                          Hobbies
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          value="home_and_lifestyle"
                          id="flexRadioDefault13"
                          checked={selectedCategory === "home_and_lifestyle"}
                          onChange={handleCategoryChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault13"
                        >
                          Home & Lifestyle
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          value="performing_and_visual_arts"
                          id="flexRadioDefault14"
                          checked={
                            selectedCategory === "performing_and_visual_arts"
                          }
                          onChange={handleCategoryChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault14"
                        >
                          Performing & Visual Arts
                        </label>
                      </div>
                      {/* Add more radio buttons for other categories */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-1"></div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-1"></div>
          <div className="col-lg-8 col-md-8 col-sm-10 ">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <h1 className="">Events Result</h1>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col">
                {isHaveInputValue ? (
                  dataToDisplay.length < 1 ? (
                    <div className="text-center my-5">
                      <p>We don't have any Event yet!</p>
                    </div>
                  ) : (
                    <>
                      <Table id="events" className="mb-5">
                        <Thead>
                          <Tr>
                            <Th>Event Name</Th>
                            <Th>Location</Th>
                            <Th>Category</Th>
                            <Th>Date</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {dataToDisplay.map((doc, i) => {
                            return (
                              <Tr key={i}>
                                <Td>{doc.eventName}</Td>
                                <Td>{doc.location}</Td>
                                <Td>{doc.category}</Td>
                                <Td>{doc.date}</Td>
                              </Tr>
                            );
                          })}
                        </Tbody>
                      </Table>
                    </>
                  )
                ) : (
                  <div className="text-center my-5">
                    <h3 className="text-danger">Please enter event name!!</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-1"></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
