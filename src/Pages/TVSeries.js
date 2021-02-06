import React, {Component} from 'react';
import SeriesList from "../tvseries/components/SeriesList";
import Loader from "../tvseries/components/loader";
import Navbar from "../Navbar/Navbar";
import TextField from '@material-ui/core/TextField';
import {Button, Alert, Spinner, Badge} from "reactstrap";
import {Carousel} from "react-bootstrap";

class Series extends Component{
    state={
        series:[],
        seriesName:'',
        isFetching: false,
        importantText:''
    }
    
    
    onSeriesInputChange = e =>{
        this.setState({seriesName:e.target.value, isFetching:true})
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then((response)=> response.json())
        .then(json => this.setState({series:json, isFetching:false}))
    }
    
    render(){
        const {series, seriesName, isFetching,importantText}=this.state
        return(
            <div>
                <Navbar/>

                <h1 className="mb-5 align-text-center">Your favorite TV Series are here <Badge color="secondary">NOW</Badge></h1>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-best-tv-shows-6up-02-1513694051.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spring-tv-1584132474.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.cartoonpics.net/data/media/34/THE_SIMPSONS.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
                
                <div>
                    <TextField
                        id="search"
                        label="Enter TV Series"
                        type="search"
                        margin="normal"
                        value={seriesName}
                        onChange={this.onSeriesInputChange}
                        helperText={importantText}
                    />
                </div>
                <div>
                    {
                        !isFetching && series.length === 0 && seriesName.trim() === ""
                        &&
                        
                        <Button button color="danger">Search</Button>
                    }
                    {
                        !isFetching && series.length === 0 && seriesName.trim() !== ""
                        &&
                        <Alert color="" className="text-center p-5 mt-3">
                        Can't find any TV Series... Try again
                        </Alert>
                    }
                    {
                        isFetching && <Loader/>
                        
                    }
                    {
                        !isFetching && <SeriesList list={this.state.series}/>
                    }
                </div>
            </div>
        )
    }
}

export default Series;