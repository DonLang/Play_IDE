class WelcomeController < ApplicationController
  def index
    @css = Csscode.new(code: "")
    @javascript = Javascriptcode.new(code: "")
    @html = Htmlcode.new(code: "")
  end
end
