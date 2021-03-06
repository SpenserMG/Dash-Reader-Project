import './UIContainer.css'
import UI from './UI';
import React, { useState } from 'react'
import RsvpComponent from './RsvpComponent';
import defaultText from './DefaultText'


function UIContainer() {

  const [inputText, setInputText] = useState(defaultText)
  const [binonicText, setBinonicText] = useState("")

  const textInputHandler = (e) => {
    setInputText(e.target.value)
  }

  const reader_uis = [
    <UI
      reader_name="Input"
      keyValue="input"
      buttonNames={[
        "Font",
        "Theme",
        "WPM",
        "Timer",
        "Random",
        "Clear"
      ]}>
      <textarea
        className="textarea"
        onChange={textInputHandler}
        value={inputText}>
      </textarea>
    </UI>,
    <UI
      reader_name="RSVP"
      keyValue="rsvp"
      buttonNames={[
        "Font",
        "WPM",
        "Theme",
        "Timer",
        "Random",
        "Clear"
      ]}>
      <div id="rsvp-div" className="textarea">
        {/* {inputText} */}
        <RsvpComponent inputText={inputText} />
      </div>
    </UI>,
    <UI
      reader_name="Binonic"
      keyValue="binonic"
      buttonNames={[
        "Font",
        "WPM",
        "Theme",
        "Timer",
        "Random",
        "Clear"
      ]}>
      <div dangerouslySetInnerHTML={{ __html: binonicText }} className="textarea"></div>
    </UI>,
  ]

  const readerUIDict = {}
  for (const reader_ui of reader_uis) {
    readerUIDict[reader_ui.props.keyValue] = reader_ui
  }
  const readerUISelectOptions = []
  for (const [key, reader_ui] of Object.entries(readerUIDict)) {
    readerUISelectOptions.push(
      <option key={key} value={key}>{reader_ui.props.reader_name}</option>
    )
  }

  const firstKey = Object.keys(readerUIDict)[0]
  const [optionKey, setOptionKey] = useState(firstKey)

  const renderTab = () => {
    return readerUIDict[optionKey]
  }

  const selectHandler = async (e) => {
    const selectValue = e.target.value
    if (selectValue === "binonic") {
      await updateBinonic()
    }
    setOptionKey(selectValue)
  }

  const updateBinonic = async () => {
    const fetchurl = `https://readgood.azurewebsites.net/hello?message=${inputText}`
    fetch(fetchurl)
      .then(response => response.json())
      .then((response) => response.textBlock)
      .then(binonicResult => setBinonicText(binonicResult))
      .catch(err => console.log(err))
  }

  return (
    <main className='main'>
      <div className="reader-ui-select-container">
        <select className="reader-select" onChange={selectHandler}>
          {readerUISelectOptions}
        </select>
      </div>
      {renderTab()}
    </main>
  )
}

export default UIContainer
