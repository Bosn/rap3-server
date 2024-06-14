import { Translation } from 'react-i18next'
import React, { Component } from 'react'
import { PropTypes } from '../../family'
import Repository from './Repository'

class RepositoryList extends Component<any, any> {
  static propTypes = {
    name: PropTypes.string, // 搜索仓库
    repositories: PropTypes.array.isRequired, // 仓库列表
    editor: PropTypes.string.isRequired, // 仓库编辑器地址
  }
  render() {
    const { name, repositories, editor } = this.props
    if (!repositories.length) {
      return name
        ? <Translation>{
          (t) =>
            <div className="fontsize-20 text-center p50">{t('No match is found')} <strong>{name}</strong> {t('repositories')}</div>}
        </Translation>
        : <Translation>{(t) => <div className="fontsize-20 text-center p50">{t('There is no data')}</div>}</Translation>
    }
    return (
      <div className="RepositoryList row">
        {repositories.map((repository: any) => (
          <div key={repository.id} >
            <Repository repository={repository} editor={editor} />
          </div>
        )
        )}
      </div>
    )
  }
}

export default RepositoryList
