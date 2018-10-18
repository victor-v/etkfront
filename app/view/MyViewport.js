/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.6.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.6.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('etkfront.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'etkfront.view.MyViewportViewModel',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.form.field.Display'
    ],

    viewModel: {
        type: 'myviewport'
    },
    height: 250,
    width: 400,
    layout: 'border',

    items: [
        {
            xtype: 'tabpanel',
            region: 'center',
            activeTab: 0,
            items: [
                {
                    xtype: 'panel',
                    title: 'Физическое лицо',
                    items: [
                        {
                            xtype: 'container',
                            height: 150,
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Логин'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Пароль',
                                    value: 'Display Field'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Token',
                                    value: 'Display Field'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'RenewToken',
                                    value: 'Display Field'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        console.log('test');
                                        for (var i = 0; i < 100; i++) {
                                            Ext.Ajax.request({
                                                url: 'http://laravel-pass/api/auth/signup',

                                                method: 'POST',
                                                cors: true,
                                                useDefaultXhrHeader : false,
                                                params: {
                                                    pin:i,
                                                    password:"123456",
                                                    password_confirmation:"123456",
                                                    _dc: new Date().getTime()
                                                }
                                            });
                                        }
                                    },
                                    text: 'Зарегистрировать'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        console.log('test');
                                        Ext.Ajax.request({
                                            url: 'http://laravel-pass/api/auth/login',

                                            method: 'POST',

                                            params: {
                                                pin:Math.floor(Math.random() * 300000),
                                                password:"123456",
                                                _dc: new Date().getTime()
                                            },

                                            success: function(response, opts) {
                                                console.log(response);
                                            },

                                            failure: function(response, opts) {
                                                console.log(response);
                                            },

                                            callback: function(options, success, response){
                                                console.log(response);
                                            }
                                        });
                                    },
                                    text: 'Получить'
                                }
                            ]
                        },
                        {
                            xtype: 'tabpanel',
                            activeTab: 0,
                            items: [
                                {
                                    xtype: 'panel',
                                    title: 'Физ лицо'
                                },
                                {
                                    xtype: 'panel',
                                    title: 'Компания'
                                },
                                {
                                    xtype: 'panel',
                                    title: 'Tab 3'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: 'Юридическое лицо',
                    items: [
                        {
                            xtype: 'container',
                            height: 150,
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Логин'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Пароль',
                                    value: 'Display Field'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Token',
                                    value: 'Display Field'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'RenewToken',
                                    value: 'Display Field'
                                }
                            ]
                        },
                        {
                            xtype: 'tabpanel',
                            activeTab: 0,
                            items: [
                                {
                                    xtype: 'panel',
                                    title: 'Физ лицо'
                                },
                                {
                                    xtype: 'panel',
                                    title: 'Компания'
                                },
                                {
                                    xtype: 'panel',
                                    title: 'Tab 3'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: 'Сотрудник МинЗТО',
                    items: [
                        {
                            xtype: 'container',
                            height: 150,
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Логин'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Пароль',
                                    value: 'Display Field'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Token',
                                    value: 'Display Field'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'RenewToken',
                                    value: 'Display Field'
                                }
                            ]
                        },
                        {
                            xtype: 'tabpanel',
                            activeTab: 0,
                            items: [
                                {
                                    xtype: 'panel',
                                    title: 'Физ лицо'
                                },
                                {
                                    xtype: 'panel',
                                    title: 'Компания'
                                },
                                {
                                    xtype: 'panel',
                                    title: 'Tab 3'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: 'Супер Пользователь',
                    items: [
                        {
                            xtype: 'container',
                            height: 150,
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Логин'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Пароль',
                                    value: 'Display Field'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Token',
                                    value: 'Display Field'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'RenewToken',
                                    value: 'Display Field'
                                }
                            ]
                        },
                        {
                            xtype: 'tabpanel',
                            activeTab: 0,
                            items: [
                                {
                                    xtype: 'panel',
                                    title: 'Физ лицо'
                                },
                                {
                                    xtype: 'panel',
                                    title: 'Компания'
                                },
                                {
                                    xtype: 'panel',
                                    title: 'Tab 3'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

});