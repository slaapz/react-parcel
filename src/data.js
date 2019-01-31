export const macros = [
  {
    id: 1,
    title: 'ATV Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the ATV Email button n the Swiss Army Macro.',
      'Choose the email subject from the drop_down list.',
      'Click OK.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'ATV',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/ATV.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingATV',
      data_target: '#collapseATV',
      aria_controls: 'collapseATV'
    }
  },
  {
    id: 2,
    title: 'BO Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Export the Excel spreadsheet attachment.',
      'Click Enable Editing.',
      'Click the Trade Details tab.',
      'Click the BO Email button in the Swiss Army Macro.',
      'Adjust the email verbiage or recipeints as needed.'
    ],
    links: [
      {
        name: 'BO',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/BO.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingBO',
      data_target: '#collapseBO',
      aria_controls: 'collapseBO'
    }
  },
  {
    id: 3,
    title: 'BOSSORDER Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the Trade Details tab.',
      'Click the BOSSORDER Email button in the Swiss Army Macro.',
      'Choose the email subject from the drop_down menu displayed.',
      'Take a screen clip of the Trade Details in Actimize.',
      'Paste the clip to the bottom of the email body.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'BOSSORDER',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/BOSS.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingBOSS',
      data_target: '#collapseBOSS',
      aria_controls: 'collapseBOSS'
    }
  },
  {
    id: 4,
    title: 'CA Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the CA Email button in the Swiss Army Macro.',
      'Choose the email subject from the drop_down menu displayed.',
      'Clip the Focus Issue from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/Custodial.aspx'
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingCA',
      data_target: '#collapseCA',
      aria_controls: 'collapseCA'
    }
  },
  {
    id: 5,
    title: 'CSP Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the CSP Email button in the Swiss Army Macro.',
      'Choose the email subject from the drop_down menu displayed.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'CSP',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/CSP/Pages/CSP%20Modification%20Requests.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingCSP',
      data_target: '#collapseCSP',
      aria_controls: 'collapseCSP'
    }
  },
  {
    id: 6,
    title: 'CTA Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the CTA Email button in the Swiss Army Macro.',
      'Choose the email subject from the drop_down menu displayed.',
      'Clip the CTA Details from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'CTA',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/CTA.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingCTA',
      data_target: '#collapseCTA',
      aria_controls: 'collapseCTA'
    }
  },
  {
    id: 7,
    title: 'DAA Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the DAA Email button in the Swiss Army Macro.',
      'Clip the Product Details from the Additional Informat section in Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'DAA',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/DAA.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingDAA',
      data_target: '#collapseDAA',
      aria_controls: 'collapseDAA'
    }
  },
  {
    id: 8,
    title: 'FFR/FFRU Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the FFR/FFRU Email button in the Swiss Army Macro.',
      'Choose the trades to escalate from the resulting spreadsheet.',
      'Click the FFR Send Email button.',
      'Choose the email subject from the drop_down menu displayed.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'FFR',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/FFR%20Policy.aspx'
      },
      {
        name: 'FFRU',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/FFR_U.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingFFR',
      data_target: '#collapseFFR',
      aria_controls: 'collapseFFR'
    }
  },
  {
    id: 9,
    title: 'HBS Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the HBS Email button in the Swiss Army Macro.',
      'Choose the email subject from the drop_down menu displayed.',
      'Clip the Focus Issues from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'HBS',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/HBS.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingHBS',
      data_target: '#collapseHBS',
      aria_controls: 'collapseHBS'
    }
  },
  {
    id: 10,
    title: 'LIETFS Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the LIETFS Email button in the Swiss Army Macro.',
      'Choose the email subject from the drop_down menu displayed.',
      'Clip the Transaction Details from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'LIETFS',
        url: 'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Pages/LIETF.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingLIETFS',
      data_target: '#collapseLIETFS',
      aria_controls: 'collapseLIETFS'
    }
  },
  {
    id: 11,
    title: 'LRB Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the LRB Email button in the Swiss Army Macro.',
      'Choose the email subject from the drop_down menu displayed.',
      'Clip the Focus Issues from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'LRB',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/LRB.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingLRB',
      data_target: '#collapseLRB',
      aria_controls: 'collapseLRB'
    }
  },
  {
    id: 12,
    title: 'MFCS Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Export the Trade Details to Excel.',
      'Click the MFCS Alert button in the Swiss Army Macro.',
      'Highlight the trades you want to escalate on the spreadsheet.',
      'Click the Send Email button in the exported spreadsheet.',
      'Choose the email subject from the drop_down menu displayed.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'MFCS',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/BlotterNotes/Wiki%20Pages/MFCS%20(Aged%20C%20Shares).aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingMFCS',
      data_target: '#collapseMFCS',
      aria_controls: 'collapseMFCS'
    }
  },
  {
    id: 13,
    title: 'MFSCI Report Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the report link in Actimize.',
      'Click the MFSCI Email button in the Swiss Army Macro.',
      'Clip the trades from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'MFSCI',
        url: 'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Pages/MFSCI.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingMFSCI',
      data_target: '#collapseMFSCI',
      aria_controls: 'collapseMFSCI'
    }
  },
  {
    id: 14,
    title: 'MOC Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the MOC Email button in the Swiss Army Macro.',
      'Clip the Focus Issues from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'MOC',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/MOC.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingMOC',
      data_target: '#collapseMOC',
      aria_controls: 'collapseMOC'
    }
  },
  {
    id: 15,
    title: 'Option Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the Option Email button in the Swiss Army Macro.',
      'Highlight the trades you want to escalate on the spreadsheet.',
      'Click the Send Email button in the exported spreadsheet.',
      'Choose the email subject from the drop_down menu displayed.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'NRA',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/NRA%20Review.aspx'
      },
      {
        name: 'OOL',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/OOL%20Review.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingOPT',
      data_target: '#collapseOPT',
      aria_controls: 'collapseOPT'
    }
  },
  {
    id: 16,
    title: 'PD Report Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the report link in Actimize.',
      'Click the PD Email button in the Swiss Army Macro.',
      'Highlight the trades you want to escalate on the spreadsheet.',
      'Clip the trades from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'PD',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Pages/PROSPECTUS_DELIVERY.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingPD',
      data_target: '#collapsePD',
      aria_controls: 'collapsePD'
    }
  },
  {
    id: 17,
    title: 'POS Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Export the attachment.',
      'Click the Enable Editing button in Excel.',
      'Click the POS Email button in the Swiss Army Macro.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'POS',
        url: 'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Pages/POS.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingPOS',
      data_target: '#collapsePOS',
      aria_controls: 'collapsePOS'
    }
  },
  {
    id: 18,
    title: 'PTR Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the PTR Email button in the Swiss Army Macro.',
      'Choose the email subject from the drop_down menu displayed.',
      'Clip the Trade Details from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'PTR',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/PTR.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingPTR',
      data_target: '#collapsePTR',
      aria_controls: 'collapsePTR'
    }
  },
  {
    id: 19,
    title: 'REGMRULE105 Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the REGMRULE105 Email button in the Swiss Army Macro.',
      'Clip the Focus Issues from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'REGMRULE105',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/RegMRule105/Pages/Reg%20M%20Rule%20105.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'heading105',
      data_target: '#collapse105',
      aria_controls: 'collapse105'
    }
  },
  {
    id: 20,
    title: 'RFR Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the RFR Email button in the Swiss Army Macro.',
      'Clip the Focus Issues from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'RFR',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/RFR.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingRFR',
      data_target: '#collapseRFR',
      aria_controls: 'collapseRFR'
    }
  },
  {
    id: 21,
    title: 'SSA Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the SSA Email button in the Swiss Army Macro.',
      'Clip the Focus Issues from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'SSA',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/SSA.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingSSA',
      data_target: '#collapseSSA',
      aria_controls: 'collapseSSA'
    }
  },
  {
    id: 22,
    title: 'SOP Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the SOP Email button in the Swiss Army Macro.',
      'Choose the email subject from the drop_down list.',
      'Clip the expanded Focus Issues from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'SOP',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/SOP.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingSOP',
      data_target: '#collapseSOP',
      aria_controls: 'collapseSOP'
    }
  },
  {
    id: 23,
    title: 'SRV Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the SRV Email button in the Swiss Army Macro.',
      'Choose the email subject from the drop_down list.',
      'Clip the expanded Focus Issues from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    llinks: [
      {
        name: 'SRV',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/SRV.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingSRV',
      data_target: '#collapseSRV',
      aria_controls: 'collapseSRV'
    }
  },
  {
    id: 24,
    title: 'UTA Alert Email',
    type: 'alert',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the UTA Email button in the Swiss Army Macro.',
      'Choose the email subject from the drop_down list.',
      'Clip the expanded Focus Issues from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    llinks: [
      {
        name: 'UTA',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/UTA.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'alertAccordian',
      header_id: 'headingUTA',
      data_target: '#collapseUTA',
      aria_controls: 'collapseUTA'
    }
  },
  {
    id: 25,
    title: 'ESV Alert Email',
    type: 'shortcut',
    hotKey: 'CTRL + SHIFT + F',
    list: [
      'Click the alert link in Actimize.',
      'Export the attachment.',
      'Click the Enable Editing button in Excel.',
      'Run the macro using the keyboard shortcut.',
      'Choose the email subject from the drop_down list.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    llinks: [
      {
        name: 'ESV',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/ESV.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'shortcutAccordian',
      header_id: 'headingESV',
      data_target: '#collapseESV',
      aria_controls: 'collapseESV'
    }
  },
  {
    id: 26,
    title: 'BOT',
    type: 'shortcut',
    hotKey: 'CTRL_SHIFT_T',
    list: [
      'Click the alert link in Actimize.',
      'Export the Trade Details to Excel.',
      'Run the macro using the keyboard shortcut.',
      'Highlight the trades you want to escalate on the spreadsheet.',
      'Click the Send Email button in the exported spreadsheet.',
      'Choose the email subject from the drop_down list.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    llinks: [
      {
        name: 'BOT',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/BOT.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'shortcutAccordian',
      header_id: 'headingBOT',
      data_target: '#collapseBOT',
      aria_controls: 'collapseBOT'
    }
  },
  {
    id: 27,
    title: 'Short_Sale Exempt',
    type: 'shortcut',
    hotKey: 'CTRL_SHIFT_L',
    list: [
      'Export the trades from the Adhoc Blotter.',
      'With the export in focus, run the macro using the keyboard shortcut.',
      'Highlight the trades you want to escalate on the spreadsheet.',
      'Click the Send Email button in the exported spreadsheet.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    llinks: [
      {
        name: 'Short_Sale Exempt',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/ShortSaleExempt/default.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'shortcutAccordian',
      header_id: 'headingSSE',
      data_target: '#collapseSSE',
      aria_controls: 'collapseSSE'
    }
  },
  {
    id: 28,
    title: 'Canadian Securities Review',
    type: 'shortcut',
    hotKey: 'CTRL_SHIFT_A',
    list: [
      'Open the spreadsheet sent by mssbcanadacrureview@morganstanley.com.',
      'With the spreadsheet in focus, run the macro using the keyboard shortcut.',
      'Highlight the trades you want to escalate on the spreadsheet.',
      'Click the Transpose button. Make sure the trades are still highlighted.',
      'Click the Send Email button in the exported spreadsheet.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    llinks: [
      {
        name: 'Canadian Sec. Review',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Canadian/Wiki%20Pages/Home.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'shortcutAccordian',
      header_id: 'headingCSR',
      data_target: '#collapseCSR',
      aria_controls: 'collapseCSR'
    }
  },
  {
    id: 29,
    title: 'PRIIPS Review',
    type: 'shortcut',
    hotKey: 'CTRL_SHIFT_I',
    list: [
      'Open the PRIIPS spreadsheet sent out every morning.',
      'With the spreadsheet in focus, run the macro using the keyboard shortcut.',
      'Highlight the trades you want to escalate on the spreadsheet.',
      'Click the Send Email button in the exported spreadsheet.',
      'Choose the email subject from the drop_down list.',
      'Adjust the email verbiage or receipients as needed.',
      'Repeat steps for the PRIIPS FX spreadsheet, if applicable.'
    ],
    llinks: [
      {
        name: 'PRIIPS',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/BlotterNotes/Wiki%20Pages/PRIIPS.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'shortcutAccordian',
      header_id: 'headingPRIIPS',
      data_target: '#collapsePRIIPS',
      aria_controls: 'collapsePRIIPS'
    }
  },
  {
    id: 30,
    title: 'CGA Time & Price Email',
    type: 'shortcut',
    hotKey: 'CTRL_SHIFT_C',
    list: [
      'Open the CGA spreadsheet sent out every quarter.',
      'With the spreadsheet in focus, run the macro using the keyboard shortcut.',
      'Copy/paste the trades from the spreadsheet for the FA in question to the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    llinks: [
      {
        name: 'CGA',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/BlotterNotes/Pages/CGA_Time_and_Price_Discretion_Review.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'shortcutAccordian',
      header_id: 'headingCGA',
      data_target: '#collapseCGA',
      aria_controls: 'collapseCGA'
    }
  },
  {
    id: 31,
    title: 'MFCS',
    type: 'shortcut',
    hotKey: 'CTRL_SHIFT_S',
    list: [
      'Click the alert link in Actimize.',
      'Export the Trade Details to Excel.',
      'With the spreadsheet in focus, run the macro using the keyboard shortcut.',
      'Highlight the trades you want to escalate on the spreadsheet.',
      'Click the Send Email button in the exported spreadsheet.',
      'Choose the email subject from the drop_down menu displayed.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    llinks: [
      {
        name: 'MFCS',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/BlotterNotes/Wiki%20Pages/MFCS%20(Aged%20C%20Shares).aspx'
      }
    ],
    bootstrap: {
      accord_id: 'shortcutAccordian',
      header_id: 'headingCSHARE',
      data_target: '#collapseCSHARE',
      aria_controls: 'collapseCSHARE'
    }
  },
  {
    id: 32,
    title: 'Level C Maintenance',
    type: 'shortcut',
    hotKey: 'CTRL_SHIFT_M',
    list: [
      'Open the Level C spreadsheet sent out every quarter.',
      'Highlight the trades you want to escalate on the spreadsheet.',
      'With the spreadsheet in focus, run the macro using the keyboard shortcut.',
      'Choose the email subject from the drop_down menu displayed.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    llinks: [
      {
        name: 'Level C',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/Alerts/Wiki%20Pages/Level%20C%20Maintenance.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'shortcutAccordian',
      header_id: 'headingLEVELC',
      data_target: '#collapseLEVELC',
      aria_controls: 'collapseLEVELC'
    }
  },
  {
    id: 33,
    title: 'Account Review Alert Email',
    type: 'cro',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the Account Review Alert button in the Swiss Army Macro.',
      'Clip the expanded Focus Issues from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'Account Review',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/CRO%20Contingency/Pages/Account%20Review%20(CER,%20LIE,%20LIM,%20TOR).aspx'
      }
    ],
    bootstrap: {
      accord_id: 'croAccordian',
      header_id: 'headingACR',
      data_target: '#collapseACR',
      aria_controls: 'collapseACR'
    }
  },
  {
    id: 34,
    title: 'ATOR Alert Email',
    type: 'cro',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the Advisory Turnover Alert button in the Swiss Army Macro.',
      'Clip the expanded Focus Issues from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'ATOR',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/CRO%20Contingency/Pages/Advisory%20Turnover%20Ratio.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'croAccordian',
      header_id: 'headingATOR',
      data_target: '#collapseATOR',
      aria_controls: 'collapseATOR'
    }
  },
  {
    id: 35,
    title: 'Buffer Alert Email',
    type: 'cro',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the Buffer Alert button in the Swiss Army Macro.',
      'Clip the expanded Focus Issues from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'Buffer',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/CRO%20Contingency/Pages/Buffer%20Alert.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'croAccordian',
      header_id: 'headingBUF',
      data_target: '#collapseBUF',
      aria_controls: 'collapseBUF'
    }
  },
  {
    id: 36,
    title: 'Concentration Alert Email',
    type: 'cro',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the Concentration Alert button in the Swiss Army Macro.',
      'Clip the expanded Focus Issues from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'Concentration',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/CRO%20Contingency/Pages/Concentration%20Review%20Alert.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'croAccordian',
      header_id: 'headingCON',
      data_target: '#collapseCON',
      aria_controls: 'collapseCON'
    }
  },
  {
    id: 37,
    title: 'Options Exposure Alert Email',
    type: 'cro',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the Options Exposure Alert button in the Swiss Army Macro.',
      'Clip the expanded Focus Issues from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'Options Exposure',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/CRO%20Contingency/Pages/Options%20Review%20(Options%20Exposure).aspx'
      }
    ],
    bootstrap: {
      accord_id: 'croAccordian',
      header_id: 'headingORE',
      data_target: '#collapseORE',
      aria_controls: 'collapseORE'
    }
  },
  {
    id: 38,
    title: 'SIETF Alert Email',
    type: 'cro',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the SIETF Alert button in the Swiss Army Macro.',
      'Clip the expanded Focus Issues from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'SIETF Inactivity',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/CRO%20Contingency/Pages/SI_ETF%20Inactivity%20Alert.aspx'
      },
      {
        name: 'SIETF Volitility',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/CRO%20Contingency/Pages/SI_ETF%20Volatility%20Alert.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'croAccordian',
      header_id: 'headingSIETF',
      data_target: '#collapseSIETF',
      aria_controls: 'collapseSIETF'
    }
  },
  {
    id: 39,
    title: 'UIT Breakpoint Alert Email',
    type: 'cro',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the UIT Breakpoint Alert button in the Swiss Army Macro.',
      'Clip the expanded Focus Issues from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'UIT Breakpoint',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/CRO%20Contingency/Pages/UIT%20Breakpoint%20Transaction%20Surveillance%20RPT.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'croAccordian',
      header_id: 'headingUIT',
      data_target: '#collapseUIT',
      aria_controls: 'collapseUIT'
    }
  },
  {
    id: 40,
    title: 'Unsolicited Pattern Alert Email',
    type: 'cro',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the Unsol. Pattern Alert button in the Swiss Army Macro.',
      'Clip the expanded Focus Issues from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'Unsol Pattern',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/CRO%20Contingency/Pages/Unsolicited%20Blue%20Sky%20Patterns.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'croAccordian',
      header_id: 'headingUPA',
      data_target: '#collapseUPA',
      aria_controls: 'collapseUPA'
    }
  },
  {
    id: 41,
    title: 'VIX Alert Email',
    type: 'cro',
    hotKey: '',
    list: [
      'Click the alert link in Actimize.',
      'Click the VIX Alert button in the Swiss Army Macro.',
      'Clip the expanded Focus Issues from Actimize and paste it into the email.',
      'Adjust the email verbiage or receipients as needed.'
    ],
    links: [
      {
        name: 'VIX',
        url:
          'http://sharepoint_na.ms.com/gwm/mssbcru/CRO%20Contingency/Pages/VIX%20Inactivity%20Alert.aspx'
      }
    ],
    bootstrap: {
      accord_id: 'croAccordian',
      header_id: 'headingVIX',
      data_target: '#collapseVIX',
      aria_controls: 'collapseVIX'
    }
  },
  {
    id: 42,
    title: 'Go_To_3D',
    type: 'utility',
    hotKey: 'CTRL_SHIFT_W',
    list: [
      'Select a cell in the Account Number column in either the Escalation or Alerts tab in the complex tracking sheet.',
      'Run the macro by pressing the keyboard shortcut.'
    ],
    links: [],
    bootstrap: {
      accord_id: 'utilAccordian',
      header_id: 'headingGO23D',
      data_target: '#collapseGO23D',
      aria_controls: 'collapseGO23D'
    }
  },
  {
    id: 43,
    title: 'Follow_up Email',
    type: 'utility',
    hotKey: 'CTRL_SHIFT_H',
    list: [
      'Select a cell in the Work Item ID column on the Alerts tab in the complex tracking sheet.',
      'Run the macro by pressing the keyboard shortcut.',
      'Adjust the email verbiage or recipeints as needed.'
    ],
    links: [],
    bootstrap: {
      accord_id: 'utilAccordian',
      header_id: 'headingFOLLOW',
      data_target: '#collapseFOLLOW',
      aria_controls: 'collapseFOLLOW'
    }
  },
  {
    id: 44,
    title: 'Bunching',
    type: 'utility',
    hotKey: 'CTRL_SHIFT_B',
    list: [
      'Export the complex trade blotter from Actimize.',
      'With the export in focus, run the macro by pressing the keyboard shortcut.'
    ],
    links: [],
    bootstrap: {
      accord_id: 'utilAccordian',
      header_id: 'headingBUNCH',
      data_target: '#collapseBUNCH',
      aria_controls: 'collapseBUNCH'
    }
  },
  {
    id: 44,
    title: 'Unsolictied',
    type: 'utility',
    hotKey: 'CTRL_SHIFT_P',
    list: [
      'Export the complex trade blotter from Actimize.',
      'With the export in focus, run the macro by pressing the keyboard shortcut.'
    ],
    links: [],
    bootstrap: {
      accord_id: 'utilAccordian',
      header_id: 'headingUNSOL',
      data_target: '#collapseUNSOL',
      aria_controls: 'collapseUNSOL'
    }
  },
  {
    id: 45,
    title: 'Bunching Assistant',
    type: 'utility',
    hotKey: 'CTRL_SHIFT_G',
    list: [
      'Click the alert link in Actimize.',
      'Export the attachment.',
      'Click the Enable Editing button in Excel.',
      'With the export in focus, run the macro by pressing the keyboard shortcut.'
    ],
    links: [],
    bootstrap: {
      accord_id: 'utilAccordian',
      header_id: 'headingBA',
      data_target: '#collapseBA',
      aria_controls: 'collapseBA'
    }
  }
];
