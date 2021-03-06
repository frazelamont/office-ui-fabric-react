import * as React from 'react';
import {
  DetailsList,
  DetailsRow,
  IDetailsRowProps,
  IDetailsRowCheckProps
} from 'office-ui-fabric-react/lib/DetailsList';
import { css } from 'office-ui-fabric-react/lib/Utilities';
import { createListItems } from 'office-ui-fabric-react/lib/utilities/exampleData';
import './DetailsListExample.scss';

let _items: any[];

export class DetailsListCustomRowsExample extends React.Component {
  constructor(props: {}) {
    super(props);

    _items = _items || createListItems(500);
  }

  public render() {
    return <DetailsList items={_items} setKey="set" onRenderRow={this._onRenderRow} useReducedRowRenderer={true} />;
  }

  private _onRenderRow = (props: IDetailsRowProps): JSX.Element => {
    return <DetailsRow {...props} onRenderCheck={this._onRenderCheck} aria-busy={false} />;
  };

  private _onRenderCheck = (props: IDetailsRowCheckProps): JSX.Element => {
    return (
      <div
        className={css('ms-DetailsRow-check DetailsListExample-customCheck', props.anySelected && 'is-any-selected')}
        role="button"
        aria-pressed={props.isSelected}
        data-selection-toggle={true}
      >
        <input type="checkbox" checked={props.isSelected} />
      </div>
    );
  };
}
