import React, { useEffect, useState } from "react";
import { Button, Form, Spinner, Table } from "react-bootstrap";

const PostsList = () => {
  const [state, setState] = useState({
    data: [],
    oldData: [],
    filterType: '',
    filterValue: '',
  });

  const getData = async () => {
    const dataFetched = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        METHOD: "GET",
      }
    );

    const dataParsed = await dataFetched.json();
    setState({ ...state, data: dataParsed, oldData: dataParsed });
  };

  const filterData = (type, filter) => {
    let dataLeaked = [];
    switch (type) {
      case 'userId':
        dataLeaked = state.oldData.filter(elem => elem.userId == filter);
        break;

      case 'title':
        dataLeaked = state.oldData.filter(elem => elem.title.includes(filter));
        break;

      case 'body':
        dataLeaked = state.oldData.filter(elem => elem.body.includes(filter));
        break;
    
      default:
        break;
    }

    if (dataLeaked.length == 0) {
      alert(
        "No results for this filter. Or invalid filter type, try with these options: User ID, Title, Body"
      );
      return;
    }

    setState({...state, data: dataLeaked})
  };

  const cleanFiltersAndValues = () => {
    //Clean filters in state
    setState({ ...state, filterType: '', filterValue: '' });

    //Clean filters in elements
    document.getElementById('filter').value = '';
    document.getElementById('filter-type').value = '';

    //Get data again from API
    getData(); 
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="filter-container">
          <div className="filter-values">
            <div className="filter-component filter-type">
              <Form.Select
                id="filter-type"
                aria-label="Default select example"
                onChange={(value) => {
                  setState({ ...state, filterType: value.target.value });
                }}
              >
                <option value="">Filter Type</option>
                <option value="userId">User ID</option>
                <option value="title">Title</option>
                <option value="body">Body</option>
              </Form.Select>
            </div>

            <div className="filter-component filter-input">
              <input
                type="search"
                name="filter"
                id="filter"
                placeholder="Filter value..."
                onChange={(value) =>
                  setState({ ...state, filterValue: value.target.value })
                }
              />
            </div>

            <div className="filter-component filter-button">
              <Button
                variant="primary"
                onClick={() => filterData(state.filterType, state.filterValue)}
              >
                Filter
              </Button>
            </div>
          </div>

          <div className="clean-filters-container">
          <Button
            variant="primary"
            onClick={cleanFiltersAndValues}
          >
            Clean Filters
          </Button>
        </div>
        </div>

        {state.data && state.data.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {state.data.map((elem) => {
                return (
                  <tr>
                    <td>{elem.id}</td>
                    <td>{elem.userId}</td>
                    <td>{elem.title}</td>
                    <td>{elem.body}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <div className="loader-container">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostsList;
