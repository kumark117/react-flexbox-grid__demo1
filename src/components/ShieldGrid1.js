import React,{Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ShieldCell1 from './ShieldCell1';
//import '../css/Card.css';

export default class ShieldGrid1 extends Component {

render() {
	return 	<div>
		<Grid style={{"border":"1px black solid"}}><ShieldRow1/></Grid>
		<Grid style={{"border":"1px black solid"}}><ShieldRow2/></Grid>
		<Grid style={{"border":"1px black solid"}}><ShieldRow3/></Grid>
		<Grid style={{"border":"1px black solid"}}><ShieldRow4/></Grid>
		</div>

}

}

class ShieldRow1 extends Component {
render() {
    return (
        <Row className="card">
            <Col md={3}>
		<ShieldCell1/>
            </Col>
	    <Col md={3}/>
	    <Col md={3}/>
            <Col md={3}>
                <ShieldCell1 />
	    </Col>
        </Row>
    );
}
}

class ShieldRow2 extends Component {
render() {
    return (
        <Row className="card">
            <Col md={3}>
		<ShieldCell1/>
            </Col>
            <Col md={3}>
		<ShieldCell1/>
            </Col>
            <Col md={3}>
                <ShieldCell1 />
	    </Col>
            <Col md={3}>
                <ShieldCell1 />
	    </Col>
        </Row>
    );
}
}

class ShieldRow3 extends Component {
render() {
    return (
        <Row >
            	<Col sm={4} md={4}>
			<ShieldCell1/>
		</Col>
            	<Col sm={4} md={4}>
			<ShieldCell1/>
		</Col>
            	<Col sm={4} md={4}>
			<ShieldCell1/>
		</Col>
        </Row>
    );
}
}

class ShieldRow4 extends Component {
render() {
    return (
        <Row >
            	<Col sm={2} md={2} first="md"/>
		<Col sm={8} md={8}>
			<ShieldCell1/>
			<ShieldCell1/>
            	</Col>
		<Col sm={2} md={2} last="md"/>
        </Row>
    );
}
}
