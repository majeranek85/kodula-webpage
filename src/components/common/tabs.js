import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../utils/theme';

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
            <Content className="tabs__tab-content" key={one.props.label}>
              {one.props.children}
            </Content>
          );
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
  border-bottom: 3px solid ${theme.secondary};
  display: flex;
  justify-content: center;
`;

const Tab = styled.li`
  height: 56px;
  margin: 0 0.2em;
  padding: 0 1em;
  color: ${theme.secondary};
  cursor: pointer;
  border: 0;
  opacity: 0.6;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
    border-bottom: 0;
    position: relative;
    top: 3px;
  }
`;

const Content = styled.article`
  padding: 2em;
`;
