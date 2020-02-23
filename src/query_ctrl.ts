import { QueryCtrl } from 'grafana/app/plugins/sdk';

export class AwsAthenaDatasourceQueryCtrl extends QueryCtrl {
  scope: any;
  target: any;
  panelCtrl: any;
  static templateUrl = 'query.editor.html';

  /** @ngInject */
  constructor($scope, $injector) {
    super($scope, $injector);

    this.scope = $scope;
    this.target.format = this.target.format || this.target.type || 'timeseries';
    this.target.region = this.target.region || '';
    this.target.timestampColumn = this.target.timestampColumn || '';
    this.target.valueColumn = this.target.valueColumn || '';
    this.target.legendFormat = this.target.legendFormat || '';
    this.target.timeFormat = this.target.timeFormat || '';
    this.target.queryExecutionId = this.target.queryExecutionId || '';
    this.target.queryName = this.target.queryName || '';
  }

  onChangeInternal() {
    this.panelCtrl.refresh();
  }
}
