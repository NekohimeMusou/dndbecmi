declare function mergeObject<A extends Object,B extends Object>( a: A, b: B) : B&A;


declare function renderTemplate(templatePath: string, templateData: Record<string|number, any>): Promise<string>;
