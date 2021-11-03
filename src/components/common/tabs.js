import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import theme from '../../utils/theme';
import { breakpoints } from '../../utils/breakpoints';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <StyledTabs className="tabs">
      <TabsList className="tabs__tab-list">
        {children.map((tab) => (
          <Tab as="button" className={tab.props.label === activeTab ? 'tabs__tab tabs__tab--active' : 'tabs__tab'} key={tab.props.label} onClick={(e) => handleClick(e, tab.props.label)}>
            {tab.props.label}
          </Tab>
        ))}
      </TabsList>

      {children.map((one) => {
        if (activeTab === one.props.label) {
          return (
            <Container key={one.props.label}>
              <Content className="tabs__tab-content">{one.props.children}</Content>
            </Container>
          );
        } else {
          return null;
        }
      })}
    </StyledTabs>
  );
};

export default Tabs;

/* TABS STYLE */
const StyledTabs = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

const TabsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${breakpoints.md} {
    border-bottom: 3px solid ${theme.secondary};
    flex-direction: row;
  }
`;

const Tab = styled.li`
  height: 56px;
  margin: 0.2em 0.2em;
  padding: 0 1em;
  color: ${theme.secondary};
  cursor: pointer;
  border: 0;
  opacity: 0.6;
  border-radius: 8px;
  transition: opacity 300ms, top 300ms;

  &:focus {
    outline: thin dotted;
  }

  &:hover {
    opacity: 1;
  }

  &.tabs__tab--active {
    opacity: 1;
    background: ${theme.light};
    border: 3px solid ${theme.secondary};
  }

  @media ${breakpoints.md} {
    margin: 0 0.2em;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    &.tabs__tab--active {
      border-bottom: 0;
      position: relative;
      top: 3px;
    }
  }
`;

const Content = styled.article`
  padding: 2em 0;
`;
