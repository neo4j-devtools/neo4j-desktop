import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Menu, Row } from 'antd'
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'

interface Props {
  siteTitle: string
}

export class Footer extends Component<Props> {
  render() {
    const { siteTitle } = this.props
    return (
      <Row>
        {siteTitle} is licensed under an&nbsp; <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) License</a> .
      </Row>
    )
  }
}
