import React from 'react';
import { IComponent } from './rendering-interfaces';
import { Components } from './rendering-constants';

export function RenderView({data, context}:any): React.ReactNode {
    if (!data) return null;

    function createComponent(item: IComponent): React.ReactNode {
        const { data, ui_type } = item;
        const { items, embeddedView, id, ...rest } = data;

        return React.createElement(
            Components[ui_type] as any,
            {
                ...rest,
                key: id,
                context: context
            } as any,
            Array.isArray(items)
                ? items.map(renderer)
                : renderer(embeddedView ?? null),
        );
    }

    function renderer(
        config: IComponent | null,
    ): React.ReactNode {
        if (!config) return null;

        return createComponent(config);
    }

    return renderer(data);
}
