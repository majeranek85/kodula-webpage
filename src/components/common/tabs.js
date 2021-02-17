import React, {useState} from 'react';
import styled from 'styled-components';
import theme from '../../utils/theme'

/* DATA */

const services = [
  {
    name: 'strony internetowe',
    description: 'Lorem ipsum Strony internetowe'
  },
  {
    name: 'pozycjonowanie',
    description: 'Lorem ipsum Pozycjonowanie'
  },
  {
    name: 'social media',
    description: 'Lorem ipsum Social media'
  }
]

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(services[0].name);


  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  }


  return (
    <>
      <ul>
        {services.map( service => (
          <Tab
            key={service.name}
            className={service.name === activeTab ? 'active' : ''}
            onClick={e => handleClick(e, service.name)}
          >
            {service.name}
          </Tab>
        ))
        }
      </ul>

      {services.map( service => {
        if (service.name === activeTab)
        return (
          <Content key={service.name} label={service.name}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </Content>
        );
      })
      }
    </>
  );
}

export default Tabs;

/* TABS STYLE */

const Tab = styled.button`
  height: 56px;
  padding: 0 1em;
  color: ${theme.secondary};
  cursor: pointer;
  opacity: 0.6;

  border: 0;


  &.active {
    border-bottom: 2px solid black;
    opacity: 1;
  }
`;

const Content = styled.div`
  opacity: 1;

  .active {
    opacity: 1;
  }
`;