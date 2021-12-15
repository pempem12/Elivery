import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import {Card, Button, Row, Col, CardGroup} from "react-bootstrap";
import culvDeluxe from '../../images/Culvers/web-butter-burger-deluxe-double.png';
import culvBacon from '../../images/Culvers/web-butter-burger-deluxe-double-bacon.png'
import culvCheese from '../../images/Culvers/web-butter-burger-cheese-double.png'
import culvTenders from '../../images/Culvers/web-chicken-tenders.png'
import culvCrispyChick from '../../images/Culvers/web-crispy-chicken-sandwich.png'
import culvSpicyCrispy from '../../images/Culvers/web-spicy-crispy-chicken-sandwich1.png'
import culvFries from '../../images/Culvers/web-crinkle-cut-fries.png'
import culvWisconsin from '../../images/Culvers/wisconsin-cheese-curds.png'
import culvOnion from '../../images/Culvers/web-onion-rings.png'



const IndividualPageBox = styled.div`
    background: #150f0f;
    color: #fff;
`;
const IndividualPageHeading = styled.div`
    font-family: "Brush Script MT",cursive;
    font-size: xxx-large;
    text-align: center;
`;
const ProductCategory = styled.div`
    display: flex;
    justify-content: center;
`;
const Product = styled.div`
    margin: 0 5rem;
    line-height: 2;
    width: 300px;

`;



const restaurantInfo = {
    culvers: {
        name: "Culvers",
        locations: "",
        map: "",
        categories: {
            ButterBurgers:[
                {
                    name:"Culver's Deluxe",
                    price:"$3.39",
                    image: culvDeluxe
                },
                {
                    name:"Culver's Bacon Deluxe",
                    price:"$3.89",
                    image:culvBacon
                },
                {
                    name:"ButterBurger with Cheese",
                    price:"$3.19",
                    image:culvCheese
                }
            ],
            Chicken:[
                {
                    name:"Original Chicken Tenders",
                    price:"$3.19",
                    image:culvTenders
                },
                {
                    name:"Crispy Chicken",
                    price:"$4.89",
                    image:culvCrispyChick
                },
                {
                    name:"Spicy Crispy Chicken",
                    price:"$5.19",
                    image:culvSpicyCrispy
                }
            ],
            Sides:[
                {
                    name:"Crinkle Cut Fries",
                    price:"$2.09",
                    image:culvFries
                },
                {
                    name:"Wisconsin Cheese Curds",
                    price:"$3.99",
                    image:culvWisconsin
                },
                {
                    name:"Onion Rings",
                    price:"$3.09",
                    image:culvOnion
                }
                
            ]
        }

    },
    zaxbys: {
        name: "Zaxbys",
        locations: "",
        map: "",
        categories: {
            FamilyPacks:[{
                name:"",
                price:"",
                image:""
                },
                {
                name:"",
                price:"",
                image:""
                },
                {
                name:"",
                price:"",
                image:""
                }
            ],
            zalads:[{
                name:"",
                price:"",
                image:""
                },
                {
                name:"",
                price:"",
                image:""
                },
                {
                name:"",
                price:"",
                image:""
                }
            ],
            sandwichMealz:[
                {
                    name:"",
                    price:"",
                    image:""
                },
                {
                    name:"",
                    price:"",
                    image:""
                },
                {
                    name:"",
                    price:"",
                    image:""
                }
            ],
            sides:[
                {
                    name:"",
                    price:"",
                    image:""
                },
                {
                    name:"",
                    price:"",
                    image:""
                },
                {
                    name:"",
                    price:"",
                    image:""
                }
            ]
        }
    },
    wendys: {
        name: "Wendys",
        locations: "",
        map: "",
        categories: {
            combos:[
                {
                    name:"",
                    price:"",
                    image:""
                },
                {
                    name:"",
                    price:"",
                    image:""
                },
                {
                    name:"",
                    price:"",
                    image:""
                }
            ],
            classics:[
                {
                    name:"",
                    price:"",
                    image:""
                },
                {
                    name:"",
                    price:"",
                    image:""
                },
                {
                    name:"",
                    price:"",
                    image:""
                }
            ],
            sides:[
                {
                    name:"",
                    price:"",
                    image:""
                },
                {
                    name:"",
                    price:"",
                    image:""
                },
                {
                    name:"",
                    price:"",
                    image:""
                }
            ] 
        }
    },
    fiveguys: {
        name: "FiveGuys",
        locations: "",
        map: "",
        categories: {
            dogs:[
                {
                    name:"",
                    price:"",
                    image:""
                },
                {
                    name:"",
                    price:"",
                    image:""
                },
                {
                    name:"",
                    price:"",
                    image:""
                }
            ],
            burgers:[
                {
                    name:"",
                    price:"",
                    image:""
                },
                {
                    name:"",
                    price:"",
                    image:""
                },
                {
                    name:"",
                    price:"",
                    image:""
                }
            ],
            sides:[
                {
                    name:"",
                    price:"",
                    image:""
                },
                {
                    name:"",
                    price:"",
                    image:""
                },
                {
                    name:"",
                    price:"",
                    image:""
                }
            ] 
        }
    }
}

const returnProducts = (category) => {
    const items = []
    for(const elem in category){
        items.push(category[elem]);
    }    
    return items;
};

const IndividualPage = () => {
    const params = useParams() || {};
    const restObj = restaurantInfo[params.restaurant.toLowerCase()];
    const restName = restObj.name;
    const categories = restObj.categories;
    
    //console.log(categories)
    return (
        <IndividualPageBox>
            <IndividualPageHeading>{restName}</IndividualPageHeading>
            <ProductCategory>{   
            Object.keys(categories).map(category =>(
                <div>
                    <h1>{category}</h1>
                    <CardGroup>
                    <Product><h1>{returnProducts(categories[category]).map(item =>(
                            <Card>
                              <Card.Img style={{"border-radius": "25px"}} variant="top" src={item.image} />
                              <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.price}
                                </Card.Text>
                              </Card.Body>
                            </Card>
                    ))}</h1></Product>
                    </CardGroup>
                </div>     
            ))
            }</ProductCategory>
        </IndividualPageBox>
    )
};

export default IndividualPage;
