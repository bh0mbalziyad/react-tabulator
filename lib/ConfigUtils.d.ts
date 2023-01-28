export interface IProps {
    className?: string;
    columns: any[];
    data: any[];
    height?: number;
    layout?: string;
    layoutColumnsOnNewData?: boolean;
    columnMinWidth?: number;
    columnVertAlign?: string;
    resizableColumns?: boolean;
    resizableRows?: boolean;
    autoResize?: boolean;
    tooltips?: boolean;
    tooltipsHeader?: boolean;
    tooltipGenerationMode?: string;
    initialSort?: boolean;
    initialFilter?: boolean;
    initialHeaderFilter?: boolean;
    footerElement?: any;
    index?: string;
    keybindings?: [];
    clipboard?: boolean;
    clipboardCopyStyled?: boolean;
    clipboardCopySelector?: string;
    clipboardCopyFormatter?: string;
    clipboardCopyHeader?: boolean;
    clipboardPasteParser?: string;
    clipboardPasteAction?: string;
    rowClick?: (e: any, row: any) => void;
    tableBuilding?: () => void;
    tableBuilt?: () => void;
    rowDblClick?: any;
    rowContext?: any;
    rowTap?: any;
    rowDblTap?: any;
    rowTapHold?: any;
    rowAdded?: any;
    rowDeleted?: any;
    rowMoved?: any;
    rowUpdated?: any;
    rowSelectionChanged?: any;
    rowSelected?: any;
    rowDeselected?: any;
    rowResized?: any;
    cellClick?: any;
    cellDblClick?: any;
    cellContext?: any;
    cellTap?: any;
    cellDblTap?: any;
    cellTapHold?: any;
    cellEditing?: any;
    cellEdited?: any;
    cellEditCancelled?: any;
    columnMoved?: any;
    columnResized?: any;
    columnTitleChanged?: any;
    columnVisibilityChanged?: any;
    headerClick?: any;
    headerDblClick?: any;
    headerContext?: any;
    headerTap?: any;
    headerDblTap?: any;
    headerTapHold?: any;
    htmlImporting?: any;
    htmlImported?: any;
    dataLoading?: any;
    dataLoaded?: any;
    dataEdited?: any;
    ajaxRequesting?: any;
    ajaxResponse?: any;
    ajaxError?: any;
    dataFiltering?: any;
    dataFiltered?: any;
    dataSorting?: any;
    dataSorted?: any;
    renderStarted?: any;
    renderComplete?: any;
    pageLoaded?: any;
    localized?: any;
    dataGrouping?: any;
    dataGrouped?: any;
    groupVisibilityChanged?: any;
    groupClick?: any;
    groupDblClick?: any;
    groupContext?: any;
    groupTap?: any;
    groupDblTap?: any;
    groupTapHold?: any;
    movableRowsSendingStart?: any;
    movableRowsSent?: any;
    movableRowsSentFailed?: any;
    movableRowsSendingStop?: any;
    movableRowsReceivingStart?: any;
    movableRowsReceived?: any;
    movableRowsReceivedFailed?: any;
    movableRowsReceivingStop?: any;
    validationFailed?: any;
    clipboardCopied?: any;
    clipboardPasted?: any;
    clipboardPasteError?: any;
    downloadReady?: any;
    downloadComplete?: any;
    options?: any;
}
export declare const propsToOptions: (props: any) => Promise<any>;
