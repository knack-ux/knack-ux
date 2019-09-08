import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

const variants = {
  selected: {
    background: '#1D838F',
    border: '3px solid #FFFFFF',
    boxShadow: '0 0 0 2px #1D838F'
  },
  nonSelected: {
    background: '#FFFFFF',
    border: '0px solid #FFFFFF',
    boxShadow: '0 0 0 2px #C3C3C3'
  },
  error: {
    background: '#FFFFFF',
    border: '3px solid #FFFFFF',
    boxShadow: '0 0 0 2px #BB1B18'
  }
};

interface Option {
  key: string
  value: string
}

interface Props {
  options: Option[]
}

function Radio({
  options
}: Props) {
  const [selected, setSelected] = useState(undefined);

  function renderOptions() {
    return options.map(
      ({ key, value }) => (
        <Option
          key={key}
          onClick={
            () => setSelected(key)
          }
        >
          <Circle
            variants={variants}
            initial="nonSelected"
            animate={
              selected === key
                ? 'selected'
                : 'nonSelected'
            }
          />
          {value}
        </Option>
      )
    );
  }

  return (
    <Wrap>
      {renderOptions()}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const Circle = styled(motion.div)`
  display: flex;

  width: 16px;
  height: 16px;
  margin: 8px 0;

  border-radius: 50%;

  box-sizing: border-box;
`;

const Option = styled.div`
  display: inline-flex;
  align-items: center;


  cursor: pointer;

  :hover {
    
  }

  & > ${Circle} {
    margin-right: 8px;
  }

  &:focus {
    & > ${Circle} {
      
    }
  }
`;

export default Radio;
