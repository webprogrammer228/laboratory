import React, { useEffect } from "react";
import styled from "styled-components";
import { IoClose, IoSearch } from "react-icons/io5";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "react-click-outside-hook";

import PacmanLoader from "react-spinners/PacmanLoader";
import { useDebounce } from "../../hooks/useDebounce";
import axios from "axios";
import { DoctorShow } from "./doctorsShow";
import { access } from "../../api/token";

const SearchBarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 34em;
  height: 3.8em;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 12px 3px rgba(0, 0, 0, 0.14);
  overflow: hidden;
`;

const SearchInputContainer = styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px 15px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 21px;
  color: black;
  font-weight: 500;
  border-radius: 6px;
  background-color: transparent;

  &:focus {
    outline: none;

    &::placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    color: gray;
    transition: all 250ms ease-in-out;
  }
`;

const SearchIcon = styled.span`
  color: #bebebe;
  font-size: 27px;
  margin-right: 10px;
  margin-top: 6px;
  vertical-align: middle;
`;

const CloseIcon = styled(motion.span)`
  color: #bebebe;
  font-size: 27px;
  margin-right: 10px;
  margin-top: 6px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;

  cursor: pointer;

  &:hover {
    color: #dfdfdf;
  }
`;

const ContainerVariants = {
  expanded: {
    height: "20em",
  },
  collapsed: {
    height: "3.8em",
  },
};

const LineSeparator = styled.span`
  display: flex;
  min-width: 100%;
  min-height: 2px;
  background-color: #d8d8d878;
`;

const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function SearchBar() {
  const [isExpanded, setExpanded] = useState(false);
  const [parentRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(false);

  const [doctorShow, setDoctorShow] = useState([]);

  const isEmpty = !doctorShow || doctorShow.length === 0;

  const changeHandler = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  // сворачивание разворачивание содержимого
  const expandContainer = () => {
    setExpanded(true);
  };

  const collapseContainer = () => {
    setExpanded(false);
    setSearchQuery("");
    setLoading(false);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  //
  // сворачивание при клике вне содержимого контейнера
  useEffect(() => {
    if (isClickedOutside) collapseContainer();
  }, [isClickedOutside]);

  const token = access;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/x-www-form-urlencoded",
    },
  };

  const prepareSearchQuery = (query) => {
    const url = `https://ris.euromed-omsk.ru/api/v1.0/doctors?name=${query}`;
    return encodeURI(url);
  };

  const searchServices = async () => {
    if (!searchQuery || searchQuery.trim() === "") return;

    setLoading(true);
    const URL = prepareSearchQuery(searchQuery);

    const response = await axios.get(URL, config).catch((err) => {
      console.log("Error: ", err);
    });

    if (response) {
      console.log("Response:", response.data);
      setDoctorShow(response.data);
    }

    setLoading(false);
  };

  useDebounce(searchQuery, 500, searchServices);

  const containerTransition = { type: "spring", damping: 22, stiffnes: 150 };

  console.log("Value:", searchQuery);

  return (
    <SearchBarContainer
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={ContainerVariants}
      transition={containerTransition}
      ref={parentRef}
    >
      <SearchInputContainer>
        <SearchIcon>
          <IoSearch />
        </SearchIcon>
        <SearchInput
          placeholder="Search something..."
          onFocus={expandContainer}
          ref={inputRef}
          value={searchQuery}
          onChange={changeHandler}
        />
        <AnimatePresence>
          {isExpanded && (
            <CloseIcon
              key="close-icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={collapseContainer}
              transition={{ duration: 0.2 }}
            >
              <IoClose />
            </CloseIcon>
          )}
        </AnimatePresence>
      </SearchInputContainer>
      <LineSeparator />
      <SearchContent>
        {isLoading && (
          <LoadingWrapper>
            <PacmanLoader loading color="#00A7B5" size={20} />
            {console.log(isLoading)}
          </LoadingWrapper>
        )}
        {!isLoading && !isEmpty && (
          <div>
            {console.log(isLoading)}
            {doctorShow.data?.map((elem) => (
              <DoctorShow key={elem.id} name={elem.name} />
            ))}
          </div>
        )}
      </SearchContent>
    </SearchBarContainer>
  );
}
